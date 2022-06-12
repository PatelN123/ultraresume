import {
  Badge,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Education, Experience } from '@prisma/client';
import {
  FaBrain,
  FaGithub,
  FaLinkedin,
  FaToolbox,
  FaTwitter,
  FaUser,
} from 'react-icons/fa';
import {
  HiOutlineGlobeAlt,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from 'react-icons/hi';
import Markdown from '../Markdown';

const NightOwl: React.FC<{
  name: string;
  location: string;
  pfp: string;
  email: string;
  about: string;
  footerText: string;
  skills: string;
  experiences: Experience[];
  education: Education[];
  img?: boolean;
}> = ({
  name,
  location,
  about,
  email,
  footerText,
  pfp,
  skills,
  experiences,
  education,
  img = true,
}) => {
  return (
    <Box
      bgGradient='linear(to-tl, twitter.50, twitter.100)'
      color={useColorModeValue('', 'gray.900')}
      p='10'
      rounded='lg'
      border='1px'
      borderColor={useColorModeValue('gray.100', 'gray.600')}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Flex alignItems='center'>
        {img && (
          <Image
            shadow='lg'
            src={pfp}
            height={100}
            w={100}
            alt=''
            rounded='full'
          />
        )}
        <Box ml='5'>
          <Heading as='h1' fontWeight='black'>
            {name}
          </Heading>
          <Text opacity={0.8}>{'Web developer who loves Jamstack'}</Text>
          <Box mt='1'>
            <Text display='inline-block'>
              <Icon
                as={HiOutlineLocationMarker}
                h={5}
                w={5}
                mb='-1'
                mr='1'
                color='red.400'
              />
              {location} &bull;{' '}
              <Icon
                as={HiOutlineMail}
                h={5}
                w={5}
                mb='-1'
                mr='1'
                color='chocolate'
              />
              {email}
            </Text>
          </Box>
        </Box>
      </Flex>
      <Box>
        <Box mt='10'>
          <Subheading>CONTACT ME</Subheading>
          <SimpleGrid mt='3' columns={2} gap='3'>
            <Box>
              <Icon mb='-1' h={5} w={5} mr='1' as={FaGithub} /> @lalitcodes
            </Box>
            <Box>
              <Icon
                mb='-1'
                h={5}
                w={5}
                mr='1'
                as={FaLinkedin}
                color='linkedin.400'
              />{' '}
              @lalit2005
            </Box>
            <Box>
              <Icon
                mb='-1'
                h={5}
                w={5}
                mr='1'
                as={FaTwitter}
                color='twitter.500'
              />{' '}
              @lalitcodes
            </Box>
            <Box>
              <Icon
                mb='-1'
                h={5}
                w={5}
                mr='1'
                color='green.500'
                as={HiOutlineGlobeAlt}
              />{' '}
              lalit.codes
            </Box>
          </SimpleGrid>
        </Box>
        <Box mt='10'>
          <Subheading>
            <Icon mb='-0.5' mr='2' as={FaUser} /> ABOUT
          </Subheading>
          <Markdown text={about} />
        </Box>
      </Box>
      <Box mt='10'>
        <Subheading>
          <Icon mb='-0.5' mr='2' as={FaToolbox} /> SKILLS
        </Subheading>
        <SimpleGrid columns={2} gap={3} mt={3}>
          {skills?.split(',').map((skill, index) => (
            <Box px='5' py='3' rounded='lg' bg='blue.200' key='index' as='p'>
              <Text fontWeight='bold'>&bull; {skill.toUpperCase()}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box mt='10'>
        <Subheading>
          <Icon mb='-0.5' mr='2' as={FaBrain} /> EXPERIENCE
        </Subheading>
        <Box mt='5'>
          {experiences?.map((exp, index) => (
            <Box key={index} mb='4'>
              <Text fontWeight='semibold'>{exp.title}</Text>
              <Text opacity={0.8} mt='1'>
                {exp.description}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box mt='10'>
        <Subheading>EDUCATION</Subheading>
        <Box mt='5'>
          {education?.map((e, index) => (
            <Box key={index} mb='5'>
              <Grid templateColumns='repeat(12, 1fr)' gap={6}>
                <GridItem colSpan={4}>
                  <Box>{e.period}</Box>
                </GridItem>
                <GridItem colSpan={8}>
                  <Box>
                    <Text fontWeight='semibold'>{e.title}</Text>
                    <Text mt='2'>{e.description}</Text>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>
      <Divider />
      <Box mt='10'>
        <Markdown text={footerText} />
      </Box>
    </Box>
  );
};

export default NightOwl;

const Subheading: React.FC = (props) => {
  return (
    <Heading
      // todo
      as='h2'
      color='twitter.900'
      opacity={0.9}
      fontWeight='extrabold'
      fontSize='xl'
      mb='2'>
      {props.children}
    </Heading>
  );
};
