import type { MDXComponents } from 'mdx/types'
import { Anchor, BlockQuote, Code, Emphasis, FigureCaption, H1, H2, H3, H4, H5, H6, HorizontalRule, Image, ListItem, OrderedList, Paragraph, Preformatted, Strong, Table, TableBody, TableCell, TableFooter, TableHeader, TableRow, UnorderedList } from '@/components/md';

const components: MDXComponents = {
    h1: (props) => (
        <H1 {...props} />
    ),
    h2: (props) => (
        <H2 {...props} />
    ),
    h3: (props) => (
        <H3 {...props} />
    ),
    h4: (props) => (
        <H4 {...props} />
    ),
    h5: (props) => (
        <H5 {...props} />
    ),
    h6: (props) => (
        <H6 {...props} />
    ),
    p: (props) => (
        <Paragraph {...props} />
    ),
    ol: (props) => (
        <OrderedList {...props} />
    ),
    ul: (props) => (
        <UnorderedList {...props} />
    ),
    li: (props) => (
        <ListItem {...props} />
    ),
    em: (props) => (
        <Emphasis {...props} />
    ),
    strong: (props) => (
        <Strong {...props} />
    ),
    a: (props) => (
        <Anchor {...props} />
    ),
    code: (props) => (
        <Code {...props} />
    ),
    table: (props) => (
        <Table {...props} />
    ),
    thead: (props) => (
        <TableHeader {...props} />
    ),
    tbody: (props) => (
        <TableBody {...props} />
    ),
    tfoot: (props) => (
        <TableFooter {...props} />
    ),
    tr: (props) => (
        <TableRow {...props} />
    ),
    td: (props) => (
        <TableCell {...props} />
    ),
    blockquote: (props) => (
        <BlockQuote {...props} />
    ),
    hr: (props) => (
        <HorizontalRule {...props} />
    ),
    img: (props) => (
        <Image alt={props.alt} {...props} />
    ),
    pre: (props) => (
        <Preformatted {...props} />
    ),
    figcaption: (props) => (
        <FigureCaption {...props} />
    ),
};

export function useMDXComponents(): MDXComponents {
    return {
        ...components,
    }
}