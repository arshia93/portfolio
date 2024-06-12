'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MDXContentProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function MDXContent({ mdxSource }: MDXContentProps) {
  return <MDXRemote {...mdxSource} />;
}
