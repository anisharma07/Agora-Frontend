import { fetchFileFromIPFS } from "@/app/helpers/fetchFileFromIPFS";
import React, { useEffect, useState } from "react";

const CandidateDescription = ({ IpfsHash }: { IpfsHash: String }) => {
  const [ipfsFile, setipfsFile] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    const getIpfsFile = async () => {
      const res = await fetchFileFromIPFS(IpfsHash);
      setipfsFile(res);
    };
    getIpfsFile();
  }, [IpfsHash]);
  return <p>{ipfsFile?.description}</p>;
};

export default CandidateDescription;
