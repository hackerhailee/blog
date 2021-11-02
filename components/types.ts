export interface Blog {
    title?:         string
    subtitle?:      string
    description?:   string
    imageUrl?:      string
    author?:        Author | Author[]
    posts?:         Post[]
    url?:           string
    rss?:           string
}

export interface Post {
    title?:       string
    header?:      string
    href?:        string
    category?:    Category
    description?: string
    date?:        string
    datetime?:    string
    imageUrl?:    string
    readingTime?: string
    author?:      Author
    content?:     string
}

export interface Author {
    name?:     string
    href?:     string
    imageUrl?: string
    email?:    string
    social?:   string | string[] | SocialAccounts
}

export interface Category {
    name?: string
    href?: string
}

export interface SocialAccounts {
    twitter?:       string
    facebook?:      string
    instagram?:     string
    github?:        string
    linkedin?:      string
    producthunt?:   string
    pinterest?:     string
    blog?:          string
}
