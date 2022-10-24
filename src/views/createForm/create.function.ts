import axios from "axios";
import { toast } from "react-toastify";

export interface formData {
  name: String;
  startDate: String;
  endDate: String;
  description: String;
  image: FileList;
  level: String | null;
}

export interface formDataEdit {
  name: String;
  startDate: String;
  endDate: String;
  description: String;
  image: FileList;
  level: String | null;
  id: string;
}

const getBase64 = function (file: File): Promise<any> {
  var reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort();
      reject(new DOMException("Problem parsing input file."));
    };
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(file);
  });
};

export default async function uploadData(data: formData) {
  let imageBase64 = await getBase64(data.image[0]);

  const dataBody = {
    name: data.name,
    startDate: data.startDate,
    endDate: data.endDate,
    description: data.description,
    image: imageBase64,
    level: data.level,
  };

  axios
    .post("http://localhost:8000/hackathons", {
      ...dataBody,
    })
    .then((response) => response.data)
    .then((result) => {
      toast.success("Successfully Created");
    })
    .catch((error) => {
      toast.error("Error while creating Hackathon");
    });
}

export async function editData(data: formDataEdit) {
  let imageBase64 = await getBase64(data.image[0]);

  const dataBody = {
    name: data.name,
    startDate: data.startDate,
    endDate: data.endDate,
    description: data.description,
    image: imageBase64,
    level: data.level,
    id: data.id
  };

  axios
    .patch(`http://localhost:8000/hackathons/${data.id}`, {
      ...dataBody,
    })
    .then((response) => response.data)
    .then((result) => {
      toast.success("Successfully Created");
    })
    .catch((error) => {
      toast.error("Error while creating Hackathon");
    });
}
