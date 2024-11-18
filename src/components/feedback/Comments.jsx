import { Card, CardHeader, CardTitle } from "../ui/card";

function Comments() {
  return (
    <Card className="shadow-none rounded-none border-y-2 border-dashed mt-10">
      <CardHeader>
        <CardTitle className="text-xl">Your Comments (0)</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default Comments;
