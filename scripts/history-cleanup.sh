#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$repo_root"

current_branch="${1:-vuepress}"
branches_to_reset=(vuepress master)
backup_branch="backup-before-history-reset-$(date +%Y%m%d%H%M%S)"

if git rev-parse --verify "$backup_branch" >/dev/null 2>&1; then
  echo "备份分支已存在：$backup_branch"
else
  git branch "$backup_branch"
fi

new_branch="rewrite-$(date +%Y%m%d%H%M%S)"
git checkout --orphan "$new_branch"
git add -A
git commit -m "chore: rebuild repository with sanitized history"
new_commit="$(git rev-parse HEAD)"

for branch in "${branches_to_reset[@]}"; do
  git branch -f "$branch" "$new_commit"
done

if [[ "$current_branch" != "$new_branch" ]]; then
  git checkout "$current_branch"
fi
git branch -D "$new_branch"

cat <<MSG
历史已在本地重置完成。
下一步请确认远程覆盖：
  git push --force origin vuepress master
  git push --force origin "$current_branch":gh-pages
备份分支：$backup_branch
MSG
