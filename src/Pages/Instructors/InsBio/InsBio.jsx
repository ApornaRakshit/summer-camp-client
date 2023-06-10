import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useInstructor from '../../../hooks/useInstructor';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import InstructorCard from '../../../Components/InstructorCard/InstructorCard';

const InsBio = () => {
    const [instructors] = useInstructor();
    const instructor1 = instructors.filter(item => item.name === 'Eneida Lar')
    const instructor2 = instructors.filter(item => item.name === 'Edda Larti')
    const instructor3 = instructors.filter(item => item.name === 'Sam Welsh')
    const instructor4 = instructors.filter(item => item.name === 'Cether Sh')
    const instructor5 = instructors.filter(item => item.name === 'Chloe Sch')
    const instructor6 = instructors.filter(item => item.name === 'Cather Sh')
    const instructor7 = instructors.filter(item => item.name === 'Erik Corr')
    const instructor8 = instructors.filter(item => item.name === 'Sarah Bro')
    const instructor9 = instructors.filter(item => item.name === 'Su Broad')

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Helmet>
                <title>Summer Camp | Instructor-Bio</title>
            </Helmet>
            <SectionTitle heading="Instructor"></SectionTitle>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Eneida Lar</Tab>
                    <Tab>Edda Larti</Tab>
                    <Tab>Sam Welsh</Tab>
                    <Tab>Cether Sh</Tab>
                    <Tab>Cather Sh</Tab>
                    <Tab>Chloe Sch</Tab>
                    <Tab>Erik Corr</Tab>
                    <Tab>Sarah Bro</Tab>
                    <Tab>Su Broad</Tab>
                </TabList>
                <TabPanel>
                    {
                       instructor1.map(item=><InstructorCard
                       key={item._id}
                       item={item}                       
                       ></InstructorCard>) 
                    }
                </TabPanel>
                <TabPanel>
                    {
                       instructor2.map(item=><InstructorCard
                       key={item._id}
                       item={item}                       
                       ></InstructorCard>) 
                    }
                </TabPanel>
                <TabPanel>
                    {
                       instructor3.map(item=><InstructorCard
                       key={item._id}
                       item={item}                       
                       ></InstructorCard>) 
                    }
                </TabPanel>
                <TabPanel>
                    {
                       instructor4.map(item=><InstructorCard
                       key={item._id}
                       item={item}                       
                       ></InstructorCard>) 
                    }
                </TabPanel>
                <TabPanel>
                    {
                       instructor5.map(item=><InstructorCard
                       key={item._id}
                       item={item}                       
                       ></InstructorCard>) 
                    }
                </TabPanel>
                <TabPanel>
                    {
                       instructor6.map(item=><InstructorCard
                       key={item._id}
                       item={item}                       
                       ></InstructorCard>) 
                    }
                </TabPanel>
                <TabPanel>
                    {
                       instructor7.map(item=><InstructorCard
                       key={item._id}
                       item={item}                       
                       ></InstructorCard>) 
                    }
                </TabPanel>
                <TabPanel>
                    {
                       instructor8.map(item=><InstructorCard
                       key={item._id}
                       item={item}                       
                       ></InstructorCard>) 
                    }
                </TabPanel>
                <TabPanel>
                    {
                       instructor9.map(item=><InstructorCard
                       key={item._id}
                       item={item}                       
                       ></InstructorCard>) 
                    }
                </TabPanel>
                
            </Tabs>
            <TabPanel></TabPanel>
        </div>
    );
};

export default InsBio;


