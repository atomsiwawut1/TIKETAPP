
import React from "react";
import DataTableSimple from "./data-table-simple";
import prisma from "@/prisma/db";
import UserForm from "@/components/UserForm";


const Users = async () => {
  const users = await prisma.user.findMany();

  return (
    <div>
      <UserForm/>
      <DataTableSimple users={users} />
    </div>
  );
};

export default Users;