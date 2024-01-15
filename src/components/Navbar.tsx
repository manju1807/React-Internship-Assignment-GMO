import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

interface LinkTabProps {
  label: string;
  to: string;
}

function LinkTab(props: LinkTabProps) {
  const { label, to } = props;

  return <Tab component={Link} label={label} to={to} />;
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} color={'black'}>
      <Box sx={{ borderBottom: 1, borderColor: 'royalblue' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <LinkTab label='First Page' to='/' />
          <LinkTab label='Second Page' to='/SecondPage' />
        </Tabs>
      </Box>
    </Box>
  );
}
