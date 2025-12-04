import { TocItem } from "remark-flexible-toc";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

type TocNode = TocItem & { children: TocNode[] };

function buildTocTree(toc: TocItem[]): TocNode[] {
    const roots: TocNode[] = [];
    const stack: TocNode[] = [];

    toc.forEach((item) => {
        const node: TocNode = { ...item, children: [] };
        const depth = item.depth ?? 1;

        while (stack.length > 0 && (stack[stack.length - 1].depth ?? 1) >= depth) {
            stack.pop();
        }

        if (stack.length === 0) {
            roots.push(node);
        } else {
            stack[stack.length - 1].children.push(node);
        }

        stack.push(node);
    });

    return roots;
}

function Toc({ toc }: { toc: TocItem[] }) {
    const tree = buildTocTree(toc);

    const renderNodes = (nodes: TocNode[]) => (
        <ul className="list-disc my-3 ml-5 space-y-1">
            {nodes.map((node) => (
                <li key={node.href} className={` ml-${(node.depth ?? 1) * 2}`}>
                    <a href={node.href} className="hover:underline underline-offset-3">{node.value}</a>
                    {node.children && node.children.length > 0 && renderNodes(node.children)}
                </li>
            ))}
        </ul>
    );

    return (
        <Collapsible asChild>
            <nav className="border rounded-md w-full">
                <CollapsibleTrigger asChild>
                    <Button variant='ghost' className="w-full" >
                        <span className="text-center text-base">TABLE OF CONTENTS</span>
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-3 text-sm">
                    {renderNodes(tree)}
                </CollapsibleContent>
            </nav>
        </Collapsible>
    );
}

export { Toc };