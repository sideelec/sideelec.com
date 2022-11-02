import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export const LEGAL_DOCUMENTS_DIR = join(process.cwd(), 'content/legal')

export function readMarkdownFile<T extends Record<string, any>>(slug: string) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(LEGAL_DOCUMENTS_DIR, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const frontmatter: T = data as any
    return { frontmatter, content }
}

export function getAllSlugs() {
    return fs.readdirSync(LEGAL_DOCUMENTS_DIR)
}
