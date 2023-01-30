import { Alert, Box } from "@mui/material";
import { useQuery, useMutation } from "@tanstack/react-query";
import TableWrapper from "../../shared/TableWrapper";
import { queryClientKeyList } from "../../../utilities/global/constants";
import {
  deleteCategory,
  getCategories,
} from "../../../utilities/api/categoryApi";
import { invalidateAndRefetch } from "../../../utilities/global/helpers";
import useToManuplateCategory from "../../../hooks/api/useToManuplateCategory";
import { useState } from "react";
import { TGenericObj } from "../../../utilities/global/types";

const CustomerSupportTable = () => {
  const { isLoading, error, query, onClickDeleteBtn } =
    useToManuplateCategory();

  return (
    <Box>
      {(!!error || isLoading) && (
        <Alert severity={!!error ? "error" : "info"}>
          {!!error ? String(error) : "Please wait"}
        </Alert>
      )}

      <TableWrapper
        actionColumn
        columns={["id", "name", "subCategories"]}
        onClickDeleteButton={onClickDeleteBtn}
        rows={query.data?.items || []}
        innerTableColumns={["name"]} // parentCategoryId will help us to show inner table below on a specific row instead of all the row
      />
    </Box>
  );
};

export default CustomerSupportTable;
