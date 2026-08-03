import { MoveRight, Star } from "lucide-react";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  homepage: string | null;
};

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#663399",
};

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/Mosssi/repos?sort=pushed&per_page=100",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch {
    return [];
  }
}

export const metadata = { title: "Code — Brianna" };

export default async function CodePage() {
  const repos = await getRepos();

  return (
    <main className="mx-auto max-w-[1000px] px-6 py-12">
      <h1 className="mb-3 font-mono text-4xl font-semibold text-white">
        <span className="text-accent">#</span>Code
      </h1>
      <p className="mb-12 text-lg text-gray-400">
        Live from GitHub — what I&apos;m building and learning right now.
      </p>

      {repos.length === 0 ? (
        <p className="font-mono text-sm text-gray-400">
          Couldn&apos;t load repos right now — see them directly on{" "}
        <a  
            href="https://github.com/Mosssi"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline"
          >
            github.com/Mosssi
          </a>
          .
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {repos.map((repo) => (
            <div
              key={repo.name}
              className="flex flex-col gap-3 border border-gray-600 p-4"
            >
              <h3 className="font-mono text-lg text-white">{repo.name}</h3>
              <p className="flex-1 text-sm text-gray-400">
                {repo.description ?? "No description yet."}
              </p>
              <div className="flex items-center gap-4 font-mono text-xs text-gray-400">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        background: LANG_COLORS[repo.language] ?? "#8b8b8b",
                      }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                )}
                <span>
                  Updated{" "}
                  {new Date(repo.pushed_at).toLocaleDateString("en-GB", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 self-start border border-accent px-3 py-1.5 font-mono text-[13px] text-accent transition hover:bg-accent hover:text-black"
                >
                  Repo <MoveRight size={14} />
                </a>
                {repo.homepage && (
                <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 self-start border border-gray-500 px-3 py-1.5 font-mono text-[13px] text-gray-300 transition hover:border-white hover:text-white"
                  >
                    Live <MoveRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}