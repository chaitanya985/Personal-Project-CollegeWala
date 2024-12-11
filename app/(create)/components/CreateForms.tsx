"use client"

import { useForm } from "react-hook-form";
import { createCollege, type FormData, } from "../actions/CreateCollegeAction";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useState, useEffect } from "react";
import { useEdgeStore } from "@/lib/edgestore";

const CreateForms = () => {
    const [file, setFile] = useState<File>();
    const [imagePath, setImagePath] = useState("");
    const { edgestore } = useEdgeStore();

    const {
        register,
        setValue,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
            isDirty,
            dirtyFields
        },
        reset,
    } = useForm<FormData>({
        defaultValues: {
            name: "",
            description: "",
            location: "",
            entrance: "",
            stream: "",
            author: "",
            img: "",
            collegeType: "",
            collegeUrl: "",
        },
    });

    const uploadImageHandler = async () => {
        if (file) {
            const res=await edgestore.publicFiles.upload({
                file,
            });
            setValue("img", res.url);
        }
    };

    useEffect(() => {
        if (file) {
            uploadImageHandler();
        }
    }, [file]);

    const onSubmit = handleSubmit(async(data) => {
        await createCollege(data);
        reset();
    });

  return (
    <>
    <form onSubmit={onSubmit} className="mt-10">
        <div className="flex flex-col sm:gap-10 gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
                <Input 
                id="name"
                label="College Name"
                errors={errors}
                disabled={isSubmitting}
                register={{...register("name", {required: true})}}
                />

                <Input 
                id="description"
                label="Description"
                errors={errors}
                disabled={isSubmitting}
                register={{...register("description", {required: true})}}
                />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
            <Input 
                id="location"
                label="Location"
                errors={errors}
                disabled={isSubmitting}
                register={{...register("location", {required: true})}}
                />

                <Input 
                id="entrance"
                label="Entrance exams"
                errors={errors}
                disabled={isSubmitting}
                register={{...register("entrance", {required: true})}}
                />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <Input 
                id="stream"
                label="Streams Available"
                errors={errors}
                disabled={isSubmitting}
                register={{...register("stream", {required: true})}}
                />

                <Input 
                id="author"
                label="Author"
                errors={errors}
                disabled={isSubmitting}
                register={{...register("author", {required: true})}}
                />
                <Input 
                id="collegeUrl"
                label="College Website"
                errors={errors}
                disabled={isSubmitting}
                register={{...register("collegeUrl", {required: true, pattern: { value: /^(ftp|http|https):\/\/[^ "]+$/, message: "Invalid URL" }})}}
                />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
            <Input
                id='img' 
                label="Select College Logo"
                type="file"
                onChange={(e) => {
                    setFile(e.target.files?.[0]);
                }}
                />
            <div>
                <label htmlFor="collegeType"
                className="block text-sm font-medium leading-6
                mb-2">Type of College
                </label>
                <select id="collegeType" {...register("collegeType", {
                    required: true
                })} 
                disabled={isSubmitting}
                className="py-2">
                    <option value="Private">Private</option>
                    <option value="Government">Government</option>
                    <option value="Open">Open</option>
                    <option value="Deemed">Deemed</option>
                    <option value="Autonomous">Autonomous</option>
                </select>
                </div>
            </div>
        </div>
        <input id="img"
        hidden={true}
        {...register("img")}/>

        <Button marginTop type="submit" >Submit</Button>
    </form>
    </>
  )
}

export default CreateForms