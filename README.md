# ディレクトリ構造

**例として友達一覧を表示するリストを作成する場合**

- `friends` ... Container コンポーネントとして使用
  - `friends-list`
  - `friends-item`
  - `friends-count`
  - `friends-title`

`friends.tsx` で `hooks` などのロジックを import する。
データの流れが掴みやすいので直下のコンポーネントをメモ化することでパフォーマンス改善をはかれる。
