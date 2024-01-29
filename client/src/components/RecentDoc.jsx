import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const RecentDoc = ({ data }) => {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    setDocument(data);
  }, [data]);
  return <div>RecentDoc</div>;
};

export default RecentDoc;
