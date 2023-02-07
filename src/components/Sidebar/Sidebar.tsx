import React from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
} from '@chakra-ui/react';
import { Link as Route } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box className="sidebar">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Link as={Route} to="/panel/general">
                  General
                </Link>
              </Box>
            </AccordionButton>
          </h2>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Mis PCs
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Link as={Route} to="/panel/my-pcs/pc-1">
              Pc 1
            </Link>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Link as={Route} to="/panel/history">
                  Historial
                </Link>
              </Box>
            </AccordionButton>
          </h2>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Sidebar;
