import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Checkbox,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Department {
  department: string;
  sub_departments: string[];
}

const DepartmentsList: React.FC = () => {
  const [openDepartments, setOpenDepartments] = useState<string[]>([]);
  const [checkedSubDepartments, setCheckedSubDepartments] = useState<string[]>(
    []
  );

  const data: Department[] = [
    {
      department: 'customer_service',
      sub_departments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      sub_departments: ['graphic_design', 'product_design', 'web_design'],
    },
  ];

  const handleToggle = (department: string) => {
    setOpenDepartments((prevOpen) =>
      prevOpen.includes(department)
        ? prevOpen.filter((d) => d !== department)
        : [...prevOpen, department]
    );
  };

  const handleSubDepartmentToggle = (subDepartment: string) => {
    setCheckedSubDepartments((prevChecked) =>
      prevChecked.includes(subDepartment)
        ? prevChecked.filter((d) => d !== subDepartment)
        : [...prevChecked, subDepartment]
    );
  };

  const isDepartmentOpen = (department: string) =>
    openDepartments.includes(department);

  return (
    <List>
      {data.map((item) => (
        <React.Fragment key={item.department}>
          <ListItem button onClick={() => handleToggle(item.department)}>
            <ListItemIcon>
              <Checkbox
                checked={isDepartmentOpen(item.department)}
                onChange={() => handleToggle(item.department)}
              />
            </ListItemIcon>
            <ListItemText
              primary={`${item.department} (${item.sub_departments.length})`}
            />
            {isDepartmentOpen(item.department) ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )}
          </ListItem>
          <Collapse
            in={isDepartmentOpen(item.department)}
            timeout='auto'
            unmountOnExit
          >
            <List component='div' disablePadding>
              {item.sub_departments.map((subDepartment) => (
                <ListItem
                  key={subDepartment}
                  button
                  style={{ paddingLeft: 40 }}
                  onClick={() => handleSubDepartmentToggle(subDepartment)}
                >
                  <Checkbox
                    checked={checkedSubDepartments.includes(subDepartment)}
                    onChange={() => handleSubDepartmentToggle(subDepartment)}
                  />
                  <ListItemText primary={subDepartment} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentsList;
