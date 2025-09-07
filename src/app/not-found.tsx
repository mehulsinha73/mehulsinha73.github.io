import SnakeGame from '@/components/layout/snake'

export default function NotFound() {

    return (
        <div className="">
            <div className="flex flex-col items-center justify-between">
                <p className="text-2xl md:text-3xl">
                    404 - Page Not Found
                </p>
                <p className="text-sm md:text-lg mt-2.5 pb-5 text-center">
                    Oops! Looks like you have wandered off the beaten path.
                    <br />
                    Or maybe you have found a secret level? Try to get a high score!
                </p>
            </div>
            <SnakeGame />
        </div>
    )
}