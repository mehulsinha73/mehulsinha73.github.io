"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import useInterval from '@/hooks/use-interval'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Star, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button';


type Apple = {
    x: number
    y: number
}

type Velocity = {
    dx: number
    dy: number
}

type SnakePart = {
    x: number
    y: number
}

type Snake = {
    head: SnakePart
    trail: Array<SnakePart>
}

export default function SnakeGame() {
    // Canvas Settings
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const canvasWidth = 500
    const canvasHeight = 380
    const canvasGridSize = 20

    // Game Settings
    const minGameSpeed = 10
    const maxGameSpeed = 15

    // Game State
    const [gameDelay, setGameDelay] = useState<number>(1000 / minGameSpeed)
    const [countDown, setCountDown] = useState<number>(4)
    const [running, setRunning] = useState(false)
    const [isLost, setIsLost] = useState(false)
    const [highscore, setHighscore] = useState(0)
    const [newHighscore, setNewHighscore] = useState(false)
    const [score, setScore] = useState(0)
    const [snake, setSnake] = useState<Snake>({
        head: { x: 12, y: 9 },
        trail: [],
    })
    const [apple, setApple] = useState<Apple>({ x: -1, y: -1 })
    const [velocity, setVelocity] = useState<Velocity>({ dx: 0, dy: 0 })
    const [previousVelocity, setPreviousVelocity] = useState<Velocity>({
        dx: 0,
        dy: 0,
    })

    /**
     * Clears the entire canvas
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    const clearCanvas = (ctx: CanvasRenderingContext2D) =>
        ctx.clearRect(-1, -1, canvasWidth + 2, canvasHeight + 2)

    /**
     * Generates a random position for the apple that does not overlap with the snake.
     * @returns {Apple} The new apple position.
     */
    const generateApplePosition = (): Apple => {
        const x = Math.floor(Math.random() * (canvasWidth / canvasGridSize))
        const y = Math.floor(Math.random() * (canvasHeight / canvasGridSize))

        // Check if random position interferes with snake head or trail
        if ((snake.head.x === x && snake.head.y === y) ||
            snake.trail.some((snakePart) => snakePart.x === x && snakePart.y === y)) {
            return generateApplePosition()
        }
        return { x, y }
    }

    /**
     * Initializes game state and starts the countdown.
     */
    const startGame = () => {
        setGameDelay(1000 / minGameSpeed)
        setIsLost(false)
        setScore(0)
        setSnake({
            head: { x: 12, y: 9 },
            trail: [],
        })
        setApple(generateApplePosition())
        setVelocity({ dx: 0, dy: -1 })
        setRunning(true)
        setNewHighscore(false)
        setCountDown(3)
    }

    /**
     * Handles game over logic, updates highscore if needed, and resets relevant state.
     */
    const gameOver = () => {
        if (score > highscore) {
            setHighscore(score)
            localStorage.setItem('highscore', score.toString())
            setNewHighscore(true)
        }
        setIsLost(true)
        setRunning(false)
        setVelocity({ dx: 0, dy: 0 })
        setCountDown(4)
    }

    /**
     * Draws a filled rectangle on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     * @param {number} x - The x position.
     * @param {number} y - The y position.
     * @param {number} w - The width.
     * @param {number} h - The height.
     */
    const fillRect = (
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number
    ) => {
        ctx.fillRect(x, y, w, h)
    }

    /**
     * Draws a stroked rectangle on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     * @param {number} x - The x position.
     * @param {number} y - The y position.
     * @param {number} w - The width.
     * @param {number} h - The height.
     */
    const strokeRect = (
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number
    ) => {
        ctx.strokeRect(x + 0.5, y + 0.5, w, h)
    }

    /**
     * Draws the snake (head and trail) on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    const drawSnake = useCallback((ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = '#0170F3'
        ctx.strokeStyle = '#003779'

        fillRect(
            ctx,
            snake.head.x * canvasGridSize,
            snake.head.y * canvasGridSize,
            canvasGridSize,
            canvasGridSize
        )

        strokeRect(
            ctx,
            snake.head.x * canvasGridSize,
            snake.head.y * canvasGridSize,
            canvasGridSize,
            canvasGridSize
        )

        snake.trail.forEach((snakePart) => {
            fillRect(
                ctx,
                snakePart.x * canvasGridSize,
                snakePart.y * canvasGridSize,
                canvasGridSize,
                canvasGridSize
            )

            strokeRect(
                ctx,
                snakePart.x * canvasGridSize,
                snakePart.y * canvasGridSize,
                canvasGridSize,
                canvasGridSize
            )
        })
    }, [snake])

    /**
     * Draws the apple on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    const drawApple = useCallback((ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = '#DC3030' // '#38C172' // '#F4CA64'
        ctx.strokeStyle = '#881A1B' // '#187741' // '#8C6D1F

        if (
            apple &&
            typeof apple.x !== 'undefined' &&
            typeof apple.y !== 'undefined'
        ) {
            fillRect(
                ctx,
                apple.x * canvasGridSize,
                apple.y * canvasGridSize,
                canvasGridSize,
                canvasGridSize
            )

            strokeRect(
                ctx,
                apple.x * canvasGridSize,
                apple.y * canvasGridSize,
                canvasGridSize,
                canvasGridSize
            )
        }
    }, [apple])

    /**
     * Updates the snake.head, snake.trail and apple positions, 
     * handles collisions, and updates state accordingly.
     */
    const updateSnake = () => {
        // Check for collision with walls
        const nextHeadPosition = {
            x: snake.head.x + velocity.dx,
            y: snake.head.y + velocity.dy,
        }
        if (
            nextHeadPosition.x < 0 ||
            nextHeadPosition.y < 0 ||
            nextHeadPosition.x >= canvasWidth / canvasGridSize ||
            nextHeadPosition.y >= canvasHeight / canvasGridSize
        ) {
            gameOver()
        }

        // Check for collision with apple
        if (nextHeadPosition.x === apple.x && nextHeadPosition.y === apple.y) {
            setScore((prevScore) => prevScore + 1)
            setApple(generateApplePosition())
        }

        const updatedSnakeTrail = [...snake.trail, { ...snake.head }]
        // Remove trail history beyond snake trail length (score + 2)
        while (updatedSnakeTrail.length > score + 2) updatedSnakeTrail.shift()
        // Check for snake colliding with itself
        if (
            updatedSnakeTrail.some(
                (snakePart) =>
                    snakePart.x === nextHeadPosition.x &&
                    snakePart.y === nextHeadPosition.y
            )
        )
            gameOver()

        // Update state
        setPreviousVelocity({ ...velocity })
        setSnake({
            head: { ...nextHeadPosition },
            trail: [...updatedSnakeTrail],
        })
    }

    /**
     * Handles direction changes for the snake, ensuring it cannot reverse directly.
     * @param {"UP" | "DOWN" | "LEFT" | "RIGHT"} newDirection - The new direction for the snake
     */
    const handleDirectionChange = useCallback((
        newDirection: "UP" | "DOWN" | "LEFT" | "RIGHT"
    ) => {
        let velocity = { dx: 0, dy: 0 }

        switch (newDirection) {
            case "UP":
                velocity = { dx: 0, dy: -1 };
                break;
            case "DOWN":
                velocity = { dx: 0, dy: 1 };
                break;
            case "LEFT":
                velocity = { dx: -1, dy: 0 };
                break;
            case "RIGHT":
                velocity = { dx: 1, dy: 0 };
                break;
            default:
                console.error('Error with handleDirectionChange');
        }

        if (
            !(
                previousVelocity.dx + velocity.dx === 0 &&
                previousVelocity.dy + velocity.dy === 0
            )
        ) {
            setVelocity(velocity)
        }
    }, [previousVelocity])

    // Game Hook
    useEffect(() => {
        const canvas = canvasRef?.current
        const ctx = canvas?.getContext('2d')

        if (ctx && !isLost) {
            clearCanvas(ctx)
            drawApple(ctx)
            drawSnake(ctx)
        }
    }, [drawApple, drawSnake, isLost])

    // Game Update Interval
    useInterval(
        () => {
            if (!isLost) {
                updateSnake()
            }
        },
        running && countDown === 0 ? gameDelay : null
    )

    // Countdown Interval
    useInterval(
        () => {
            setCountDown((prevCountDown) => prevCountDown - 1)
        },
        countDown > 0 && countDown < 4 ? 800 : null
    )

    // DidMount Hook for Highscore
    useEffect(() => {
        setHighscore(
            localStorage.getItem('highscore')
                ? parseInt(localStorage.getItem('highscore')!)
                : 0
        )
    }, [])

    // Score Hook: increase game speed starting at 16
    useEffect(() => {
        if (score > minGameSpeed && score <= maxGameSpeed) {
            setGameDelay(1000 / score)
        }
    }, [score])

    // Event Listener: Key Presses
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                [
                    'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
                    'w', 'a', 's', 'd', 'W', 'A', 'S', 'D',
                ].includes(e.key)
            ) {
                switch (e.key) {
                    case 'ArrowRight':
                    case 'd':
                    case 'D':
                        handleDirectionChange('RIGHT')
                        break
                    case 'ArrowLeft':
                    case 'a':
                    case 'A':
                        handleDirectionChange('LEFT')
                        break
                    case 'ArrowDown':
                    case 's':
                    case 'S':
                        handleDirectionChange('DOWN')
                        break
                    case 'ArrowUp':
                    case 'w':
                    case 'W':
                        handleDirectionChange('UP')
                        break
                    default:
                        console.error('Error with handleKeyDown')
                }
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleDirectionChange])


    return (
        <div className="flex items-center justify-center w-full relative">
            <div>
                <canvas
                    className="border flex relative overflow-hidden w-full"
                    ref={canvasRef}
                    width={canvasWidth + 1}
                    height={canvasHeight + 1}
                />
                <section className='flex justify-between items-center'>
                    <div className="py-2">
                        <p className="flex items-center gap-1 pb-1">
                            <Star className="size-5" />
                            Score: {score}
                        </p>
                        <p className="flex items-center gap-1 pb-1">
                            <Trophy className="size-5" />
                            Highscore: {highscore > score ? highscore : score}
                        </p>
                    </div>
                    {((!running && isLost) || (!isLost && countDown > 0)) && (
                        <Button onClick={startGame}>
                            {countDown === 4 ? (
                                isLost ? 'Restart Game' : 'Start Game'
                            ) : countDown}
                        </Button>
                    )}
                </section>
                {isLost && (
                    <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                        <p className="text-lg">Game Over</p>
                        <p className="mt-2 text-sm">
                            {newHighscore ? `🎉 New Highscore 🎉` : `You scored: ${score}`}
                        </p>
                    </div>
                )}
                <div className="flex items-center justify-center -mt-15">
                <div className="grid grid-cols-3 gap-2 w-full max-w-40 justify-items-center items-center">
                    <div /> {/* Empty cell for grid alignment */}
                    <Button
                        onClick={() => handleDirectionChange('UP')}
                        className="aspect-square flex w-12 h-12">
                        <ArrowUp />
                    </Button>
                    <div /> {/* Empty cell for grid alignment */}
                    <Button
                        onClick={() => handleDirectionChange('LEFT')}
                        className="aspect-square flex w-12 h-12">
                        <ArrowLeft />
                    </Button>
                    <Button
                        onClick={() => handleDirectionChange('DOWN')}
                        className="aspect-square flex w-12 h-12">
                        <ArrowDown />
                    </Button>
                    <Button
                        onClick={() => handleDirectionChange('RIGHT')}
                        className="aspect-square flex w-12 h-12">
                        <ArrowRight />
                    </Button>
                </div>
                </div>
            </div>
        </div>
    )
}