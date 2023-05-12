import React, { useEffect } from 'react';
import { Card, Box, Link, Flex, Image, Button } from '@chakra-ui/react';
import Markdown from '@/components/Markdown';
import { useMarkdown } from '@/hooks/useMarkdown';
import { getFilling } from '@/api/system';
import { useQuery } from '@tanstack/react-query';
import { useScreen } from '@/hooks/useScreen';
import { useRouter } from 'next/router';

import styles from './index.module.scss';

const Home = () => {
  const router = useRouter();
  const { inviterId } = router.query as { inviterId: string };
  const { data } = useMarkdown({ url: '/intro.md' });
  const { isPc } = useScreen();

  useEffect(() => {
    if (inviterId) {
      localStorage.setItem('inviterId', inviterId);
    }
  }, [inviterId]);

  const { data: { beianText = '' } = {} } = useQuery(['init'], getFilling);

  /* 加载动画 */
  useEffect(() => {
    setTimeout(() => {
      window.particlesJS?.('particles-js', {
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 500
            }
          },
          color: {
            value: '#4e83fd'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 0.1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 10,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#adceff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }, 1000);
  }, [isPc]);

  return (
    <Box p={[5, 10]}>
      <Card p={5} lineHeight={2}>
        <Markdown source={data} isChatting={false} />
      </Card>
    </Box>
  );
};

export default Home;
