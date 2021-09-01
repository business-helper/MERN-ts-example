import React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ICountry, IMember } from '../../interfaces';
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

type Props = {
  addMember:  (member: IMember) => void,
}

export default function MemberForm({ addMember }: Props) {
  const classes = useStyles();
  const [countryList, setCountryList] = React.useState<ICountry[]>([]);
  
  const [name, setName] = React.useState({ value: '', error: '' });
  const [country, setCountry] = React.useState({ value: '', error: '' });

  React.useEffect(() => {
    getCountryList().then(countries => {
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
  };

  const handleChange = (event: any) => {
    setCountry({
      value: event.target.value,
      error: ''
    })
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.error || country.error) return;
    const member: IMember = {
      name: name.value,
      country: country.value,
    };
    setName({ ...name, value: '' });
    return addMember(member);
  };


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
