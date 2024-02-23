import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { createPost } from '@/slices/postsSlice';
import { useAppDispatch } from '@/hooks/redux';

const FormSchema = z.object({
  content: z.string().max(200, {
    message: 'Please restrict your post to 200 characters.',
  }),
});

function CreatePost() {
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    dispatch(createPost(data))
      .unwrap()
      .then(() => {
        toast({
          title: 'Post Created!',
        });
      })
      .catch((err) => {
        toast({
          title: 'Post creation failed',
          description: err.message,
          variant: 'destructive',
        });
      });
  }

  return (
    <div className="mt-3 p-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="What's on your mind?"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default CreatePost;
