import React from "react";

const User = async ({ params }: { params: { userid: string } }) => {
  const { userid } = await params;
  console.log(userid);

  return (
    <div>
      <h1>Info about {userid}</h1>
    </div>
  );
};

export default User;
