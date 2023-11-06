// export type LocalGithubUser = {
//   login: string,
//   avatar: string,
//   name: string,
//   company: string,
//   blog: string,
//   location: string,
//   bio: string,
//   twitter: string,
//   repos: number,
//   followers: number,
//   following: number,
//   created: string,
// }

export type GithubUser = {
  login?: string | undefined,
  // id: number,
  avatar_url?: string | undefined,
  name?: string | undefined,
  company?: string | undefined,
  blog?: string | undefined,
  location?: string | undefined,
  bio?: string | undefined,
  twitter_username?: string | undefined,
  public_repos?: number | undefined,
  followers?: number | undefined,
  following?: number | undefined,
  created_at?: string | undefined,
}

export type GithubError = {
  message?: string | undefined,
  documentation_url?: string | undefined,
}