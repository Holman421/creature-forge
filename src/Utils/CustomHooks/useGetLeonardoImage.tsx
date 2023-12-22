import { useEffect, useState } from "react";
import { AspectRatioValueType } from "../../Types/types";

const useGetLeonardoImage = () => {
  const [generationId, setgenerationId] =
    useState<any>(null);

  const [generatedImage, setGeneratedImage] =
    useState<any>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const url =
    "https://cloud.leonardo.ai/api/rest/v1/generations";

  const generateImage = async (
    prompt: string,
    aspectRatio: AspectRatioValueType = "1/1"
  ) => {
    let width = 512;
    let height = 512;

    if (aspectRatio === "1/1") {
      width = 512;
      height = 512;
    } else if (aspectRatio === "4/3") {
      width = 1024;
      height = 512;
    } else if (aspectRatio === "16/9") {
      width = 1448;
      height = 808;
    } else if (aspectRatio === "9/16") {
      width = 808;
      height = 1448;
    }
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization:
            "Bearer ed170029-91e4-48c6-868b-29d7f8809292",
        },
        body: JSON.stringify({
          modelId: "2067ae52-33fd-4a82-bb92-c2c55e7d2786",
          prompt: prompt,
          width: width,
          height: height,
          num_images: 1,
          alchemy: true,
          highResolution: true,
          guidance_scale: 15,
          sd_version: "v2",
          negative_prompt:
            "deformed, blurry, poorly drawn face, ugly, poorly drawn hands, floating limbs, disconnected limbs, malformed hands, blur, out of focus, out of frame, blender, doll, cropped, poorly-drawn face, out of frame, blurred, ugly, disfigured, grainy.",
        }),
      });
      const jsonData = await response.json();
      setgenerationId(
        jsonData.sdGenerationJob.generationId
      );
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${url}/${generationId}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "content-type": "application/json",
              authorization:
                "Bearer ed170029-91e4-48c6-868b-29d7f8809292",
            },
          }
        );
        const data = await response.json();
        if (
          data.generations_by_pk?.generated_images[0]?.url
        ) {
          setGeneratedImage(
            data.generations_by_pk?.generated_images[0]?.url
          );
          setLoading(false);
        } else {
          // Call fetchImage again after a delay if the image has not been generated yet
          setTimeout(fetchImage, 2000);
        }
      } catch (error: any) {
        console.log(error);
        setLoading(false);
      }
    };
    if (generationId) {
      fetchImage();
    }
  }, [generationId]);

  return {
    generatedImage,
    loading,
    error,
    generateImage,
    resetImage: () => setGeneratedImage(null),
  };
};

export default useGetLeonardoImage;
