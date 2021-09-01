import React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ICountry } from '../../interfaces';
import { getCountryList } from '../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '3rem',
    '& .MuiTextField-root': {
      marginTop: theme.spacing(1),
      width: '100%',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default function MemberForm() {
  const classes = useStyles();
  const [countryList, setCountryList] = React.useState<ICountry[]>([]);
  
  const [name, setName] = React.useState({ value: '', error: '' });
  const [country, setCountry] = React.useState({ value: '', error: '' });

  const [age, setAge] = React.useState('');
  React.useEffect(() => {
    getCountryList().then(countries => {
      console.log('[Countries]', countries);
      setCountryList(countries);
      setCountry({ value: countries[0].name, error: '' });
    })
    .catch(e => setCountryList([]));
  }, []);

  const nameChanged = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName({
      value: event.currentTarget.value,
      error: event.currentTarget.value ? '' : 'Name is required!',
    });
  }
  const handleChange = (event: any) => {
    // setAge(event.target.value);
    setCountry({
      value: event.target.value,
      error: ''
    })
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  }


  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <div className={classes.formControl}>
        <TextField
          error={!!name.error}
          id="outlined-error-helper-text"
          label="Name"
          value={name.value}
          onChange={nameChanged}
          helperText={name.error}
          variant="outlined"
        />
      </div>

      <FormControl className={classes.formControl} error={!!country.error}>
        <InputLabel id="demo-simple-select-error-label">Country</InputLabel>
        <Select
          id='demo-simple-select-error'
          value={country.value}
          onChange={handleChange}
        >
          {
            countryList.map((country, i) => (
              <MenuItem value={country.name} key={i}>{country.name}</MenuItem>
            ))
          }
        </Select>
        <FormHelperText>{country.error}</FormHelperText>
      </FormControl>
      <div className={classes.buttonContainer}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
