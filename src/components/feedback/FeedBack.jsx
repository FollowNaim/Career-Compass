import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function FeedBack() {
  return (
    <Card className="shadow-none border-blue-600 mt-10">
      <CardHeader>
        <CardTitle className="text-2xl">
          Share Your <span className="text-blue-600">Valuable Feedback</span>
        </CardTitle>
        <CardDescription>
          We value your thoughts! Leave a comment or share your experience about
          this service. Your feedback helps us improve and serve you better.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-2">
          <Textarea className="h-24" placeholder="Write your comment here." />
          <Button className="w-fit mt-3">Send Feedback</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default FeedBack;
