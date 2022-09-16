import {
  Box,
  Card,
  CardContent,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

interface IWeeklyCheckin {}

type FormFields = {
  name: string;
  id: string;
  type: string;
  placeholder: string;
  label: string;
};

const formFields: FormFields[] = [
  {
    name: 'wentWell',
    id: 'wentWell',
    type: 'text',
    placeholder: 'Add a new answer',
    label: 'What went well this week?',
  },
  {
    name: 'challenge',
    id: 'challenge',
    type: 'text',
    placeholder: 'Add a new answer',
    label: "What's your biggest challenge right now, and how can I help?",
  },
];

const WeeklyCheckinForm: React.FC<IWeeklyCheckin> = (props) => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6">Questions</Typography>

        <Box id="form-container">
          <FormControl sx={{ width: '100%' }}>
            {formFields.map((field: FormFields, i: number) => (
              <Box key={i} mt={2}>
                <Typography variant="h6" fontWeight={500}>
                  {field.label}
                </Typography>
                <Typography variant="subtitle2">
                  Asked weekly to everyone
                </Typography>
                <TextField
                  fullWidth
                  placeholder={field.placeholder}
                  id={field.id}
                  sx={{ mt: 1 }}
                />
              </Box>
            ))}
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeeklyCheckinForm;
