"use client";
import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  title: string;
  brand: string;
  price: number;
  features: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  blurhash: string;
};

type ArgType = {
  title: string;
  brand: string;
  price: number;
  features: string[];
  description: string;
  image: string;
  category: string;
  rating: number;
  blurhash: string;
};

export default function AddNewProduct() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // Making data as in schema wise
    const makeData = {
      title: data.title,
      brand: data.brand,
      price: Number(data.price),
      features: [data.features],
      description: data.description,
      image: data.image,
      category: data.category,
      rating: Number(data.rating),
      blurhash: data.blurhash,
    };
    try {
      setLoading(true);
      const result = await fetch("/api/mvc-arc/routes/product", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(makeData),
      });
      const response = await result.json();

      setLoading(false);
      if (!response.success) {
        toast.error("something went wrong");
        return;
      } else {
        toast.success(response.message);
        router.push(`/product/${response.data._id}`);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    // "handleSubmit" will validate your inputs before invoking "onSubmit"
    <>
      <div className="max-w-4xl mx-auto border p-5 rounded-md shadow-md">
        <Toaster position="top-right" />
        <div className="text-center text-2xl font-bold mb-5">
          <h1>Add product</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          {/* There is a section */}
          <div className="flex items-center justify-between gap-2">
            <div className="w-full">
              <label>Title</label>
              <Input {...register("title")} />
            </div>

            <div className="w-full">
              <label>Brand</label>
              <Input {...register("brand")} />
            </div>
          </div>

          {/* There is a section */}
          <div className="flex items-center justify-between gap-2">
            <div className="w-full">
              <label>Price</label>
              <Input {...register("price")} />
            </div>
            <div className="w-full">
              <label>Features</label>
              <Input {...register("features", { required: true })} />
            </div>
          </div>

          {/* There is a section */}
          <div className="flex items-center justify-between gap-2">
            <div className="w-full">
              <label>Image</label>
              <Input {...register("image", { required: true })} />
            </div>
            <div className="w-full">
              <label>Category</label>
              <Input {...register("category", { required: true })} />
            </div>
          </div>

          {/* There is a section */}
          <div className="flex items-center justify-between gap-2">
            <div className="w-full">
              <label>Rating</label>
              <Input {...register("rating", { required: true })} />
            </div>
            <div className="w-full">
              <label>Blurhash code</label>
              <Input {...register("blurhash", { required: true })} />
            </div>
          </div>
          <div>
            <label>Description</label>
            <Textarea
              className="resize-none"
              {...register("description", { required: true })}
            />
          </div>

          {/* errors will return when field validation fails  */}
          {errors.title && <span>This field is required</span>}

          <Button disabled={loading} type="submit">
            {loading ? (
              <>
                <Loader className="w-4 h-4 mr-1 animate-spin" />
                submitting...
              </>
            ) : (
              "submit"
            )}
          </Button>
        </form>
      </div>
    </>
  );
}
