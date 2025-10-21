import { AnimateStagger, AnimateUpIntoView } from '@/components/animations'
import SnakeGame from '@/components/layout/snake'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "404"
}

export default function NotFound() {
    return (
        <AnimateStagger>
            <AnimateUpIntoView className="flex flex-col items-center justify-between space-y-2.5">
                <p className="text-2xl md:text-3xl">
                    404 - Page Not Found
                </p>
                <p className="text-sm md:text-lg text-center pb-5">
                    Oops! Looks like you have wandered off the beaten path.
                    <br />
                    Or maybe you have found a secret level? Try to get a high score!
                </p>
            </AnimateUpIntoView>
            <AnimateUpIntoView>
                <SnakeGame />
            </AnimateUpIntoView>
        </AnimateStagger>
    )
}