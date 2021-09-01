import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { IMember } from '../../interfaces';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 500
  }
}));

type Props = {
  rows: IMember[],
  deleteMember: (id: string) => void,
}

export default function DataTable({ rows, deleteMember }: Props) {
  const classes = useStyles();

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 300,
    },
    {
      field: 'id',
      headerName: 'Actions',
      width: 100,
      renderCell: (params) => <Button
        variant='outlined'
        size='small'
        color='secondary'
        onClick={() => handleOnDelete(String(params.value))}
        >
          Delete
        </Button>
    },
  ];
  const handleOnDelete = (id: string) => {
    if (!window.confirm('Are you sure to delete it?')) return;
    deleteMember(id);
  }
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