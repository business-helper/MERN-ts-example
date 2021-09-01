import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { IMember } from '../../interfaces';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 500
  }
}));

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 150,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: any) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${
  //       params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
];


type Props = {
  rows: IMember[],
}

export default function DataTable({ rows }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
  </div>
  )
}