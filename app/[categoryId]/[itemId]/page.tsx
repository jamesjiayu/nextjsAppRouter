export default function Page({
  params,
}: {
  params: { categoryId: string; itemId: string };
}) {
  return (
    <div>
      My Post: params.categoryid / itemId: {params.categoryId} / {params.itemId}
    </div>
  );
}
