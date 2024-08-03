import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../config";

export function useGenerateSquareImages() {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["useGenerateSquareImages"],
    queryFn: async () => {
      const response = await httpClient.get(
        "/image/200x100/282828/ffffff?text=Hello+Peter",
        {
          responseType: "blob",
        }
      );
      const url = URL.createObjectURL(response.data);
      return url;
    },
  });

  return { data: data, isLoading };
}
