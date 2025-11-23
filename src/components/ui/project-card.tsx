import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogClose,
    MorphingDialogDescription,
    MorphingDialogContainer,
} from '@/components/animations/morphing-dialog';
import { PlusIcon } from 'lucide-react';
import { AnimateUpIntoView } from '@/components/animations';
import Link from 'next/link';
import { ibmPlexMono } from '@/styles/fonts';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

export type ProjectCardData = {
    id: string;
    title: string;
    subtitle: string;
    excerpt: string[];
    createdAt: string;
    urlLabel: string;
    url: string;
    techStack: string[];
    thumbnail: string;
    thumbnailAlt: string;
};

export function ProjectCard(data: ProjectCardData) {

    return (
        <AnimateUpIntoView>
            <MorphingDialog
                transition={{
                    type: 'spring',
                    bounce: 0.05,
                    duration: 0.25,
                    ease: 'easeInOut',
                }}
            >
                <MorphingDialogTrigger
                    className='flex max-w-80 rounded-xl flex-col overflow-hidden border bg-sidebar'
                >
                    <MorphingDialogImage
                        src={data.thumbnail}
                        alt={data.thumbnailAlt}
                        className='h-48 w-full object-cover placeholder:blur-lg'
                    />
                    <div className='flex grow flex-row items-end justify-between px-3 py-2'>
                        <div>
                            <MorphingDialogTitle className='text-start'>
                                {data.title}
                            </MorphingDialogTitle>
                            <MorphingDialogSubtitle className='text-start text-muted-foreground text-xs'>
                                {data.subtitle}
                            </MorphingDialogSubtitle>
                        </div>

                        <PlusIcon size={12}
                            className={cn('relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none items-center justify-center',
                                'rounded-lg hover:border border-muted-foreground text-muted-foreground')} />
                    </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                    <MorphingDialogContent
                        className={cn('pointer-events-auto relative rounded-xl flex h-auto w-full flex-col',
                            'overflow-hidden border bg-sidebar sm:w-[500px]', ibmPlexMono.className)}>
                        <MorphingDialogImage
                            src={data.thumbnail}
                            alt={data.thumbnailAlt}
                            className='h-full w-full'
                        />
                        <div className='p-6'>
                            <MorphingDialogTitle className='text-2xl'>
                                {data.title}
                            </MorphingDialogTitle>
                            <MorphingDialogSubtitle className='text-muted-foreground'>
                                {data.subtitle}
                            </MorphingDialogSubtitle>
                            <MorphingDialogDescription
                                disableLayoutAnimation
                                className='space-y-4'
                            >
                                <div className='mt-2 space-y-2'>
                                    {data.excerpt.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                                <ScrollArea className="w-full">
                                    <div className="flex gap-2 pb-1">
                                        {data.techStack.map((tag, index) => (
                                            <Badge
                                                key={index}
                                                className="shrink-0 bg-muted-foreground"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <ScrollBar orientation="horizontal" className="h-1.5" />
                                </ScrollArea>
                                <div className='flex items-center justify-between mt-3'>
                                    <Link
                                        className='inline-flex underline underline-offset-4'
                                        href={data.url}
                                        target='_blank'
                                        rel='noopener'
                                    >
                                        {data.urlLabel}
                                    </Link>
                                    {data.createdAt}
                                </div>
                            </MorphingDialogDescription>
                        </div>
                        <MorphingDialogClose className='text-muted-foreground' />
                    </MorphingDialogContent>
                </MorphingDialogContainer>
            </MorphingDialog>
        </AnimateUpIntoView>
    );
}
