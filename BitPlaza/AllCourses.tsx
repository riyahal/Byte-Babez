
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Defining course structure
interface Course {
  image: any;
  title: string;
  shortDesc: string;
  details: {
    desc: string;
  };
}

const AllCourses = ({navigation}) => {

  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({});
  const [startStates, setStartStates] = useState<Record<string, boolean>>({}); // Store state

  const handleStartPress = (title: string) => {
    setStartStates((prevStates) => ({
      ...prevStates,
      [title]: !prevStates[title],
    }));
  };

  const start: Start[] = [
    {
        text: 'Start',
    }
  ]

  const courses: Course[] = [
    {
      image: require('./assets/images/courses/python/python_course1.png'),
      title: 'Introduction to Python',
      shortDesc: "What is Python, the high-level interpreted object-oriented programming language?",
      details: {
        desc: "Learn the fundamentals of Python, including its history, characteristics, and applications in real life.",
      },
    },
    {
      image: require('./assets/images/courses/python/python_course2.png'),
      title: 'Keywords and Identifiers',
      shortDesc: "What are keywords? What are identifiers?",
      details: {
        desc: "Learn about these unique reserved words used for naming variables, functions, and other entities.",
      },
    },
    {
        image: require('./assets/images/courses/python/python_course1.png'),
        title: 'Data Types',
        shortDesc: "String, Integer, Boolean, Float, Complex - these are few of the many data types you will find.",
        details: {
          desc: "Data types restrict the kind of data or characters a user inputs!",
        },
      },
      {
        image: require('./assets/images/courses/python/python_course1.png'),
        title: 'Course 3',
        shortDesc: "Learn somethin",
        details: {
          desc: "Details",
        },
      },
      {
        image: require('./assets/images/courses/python/python_course1.png'),
        title: 'Course 4',
        shortDesc: "Learn",
        details: {
          desc: "Details",
        },
      },
      {
        image: require('./assets/images/courses/python/python_course1.png'),
        title: 'Course 5',
        shortDesc: "Short description!",
        details: {
          desc: "Details for another course.",
        },
      },

      // HTML/CSS
      {
        image: require('./assets/images/courses/html-css/htmlcss_course1.png'),
        title: 'Introduction to HTML',
        shortDesc: "What is HTML, HyperText Markup Language?",
        details: {
          desc: "Learn the fundamentals of Python, including its history, characteristics, and applications in real life.",
        },
      },
      {
        image: require('./assets/images/courses/html-css/htmlcss_course1.png'),
        title: 'Structure of an HTML Document',
        shortDesc: "What are the elements of a HTML document? Learn to create one yourself.",
        details: {
          desc: "Learn about these unique reserved words used for naming variables, functions, and other entities.",
        },
      },
      {
          image: require('./assets/images/courses/html-css/htmlcss_course1.png'),
          title: 'Data Types',
          shortDesc: "String, Integer, Boolean, Float, Complex - these are few of the many data types you will find.",
          details: {
            desc: "Data types restrict the kind of data or characters a user inputs!",
          },
        },
        {
          image: require('./assets/images/courses/html-css/htmlcss_course1.png'),
          title: 'Course 3',
          shortDesc: "Learn somethin",
          details: {
            desc: "Details",
          },
        },
        {
          image: require('./assets/images/courses/html-css/htmlcss_course1.png'),
          title: 'Course 4',
          shortDesc: "Learn",
          details: {
            desc: "Details",
          },
        },
        {
          image: require('./assets/images/courses/html-css/htmlcss_course1.png'),
          title: 'Course 5',
          shortDesc: "Short description!",
          details: {
            desc: "Details for another course.",
          },
        },

        {
            image: require('./assets/images/courses/javascript/js_course1.png'),
            title: 'Introduction to JavaScript',
            shortDesc: "What is JavaScript, the high-level object-oriented programming language used for building web apps?",
            details: {
              desc: "Learn the fundamentals of Python, including its history, characteristics, and applications in real life.",
            },
          },
          {
            image: require('./assets/images/courses/javascript/js_course1.png'),
            title: 'Keywords and Identifiers',
            shortDesc: "What are keywords? What are identifiers?",
            details: {
              desc: "Learn about these unique reserved words used for naming variables, functions, and other entities.",
            },
          },
          {
              image: require('./assets/images/courses/javascript/js_course1.png'),
              title: 'Data Types',
              shortDesc: "String, Integer, Boolean, Float, Complex - these are few of the many data types you will find.",
              details: {
                desc: "Data types restrict the kind of data or characters a user inputs!",
              },
            },
            {
              image: require('./assets/images/courses/javascript/js_course1.png'),
              title: 'Course 3',
              shortDesc: "Learn somethin",
              details: {
                desc: "Details",
              },
            },
            {
              image: require('./assets/images/courses/javascript/js_course1.png'),
              title: 'Course 4',
              shortDesc: "Learn",
              details: {
                desc: "Details",
              },
            },
            {
              image: require('./assets/images/courses/javascript/js_course1.png'),
              title: 'Course 5',
              shortDesc: "Short description!",
              details: {
                desc: "Details for another course.",
              },
            },

            {
                image: require('./assets/images/courses/python/python_course1.png'),
                title: 'Introduction to Python',
                shortDesc: "What is Python, the high-level interpreted object-oriented programming language?",
                details: {
                  desc: "Learn the fundamentals of Python, including its history, characteristics, and applications in real life.",
                },
              },
              {
                image: require('./assets/images/courses/python/python_course2.png'),
                title: 'Keywords and Identifiers',
                shortDesc: "What are keywords? What are identifiers?",
                details: {
                  desc: "Learn about these unique reserved words used for naming variables, functions, and other entities.",
                },
              },
              {
                  image: require('./assets/images/courses/python/python_course1.png'),
                  title: 'Data Types',
                  shortDesc: "String, Integer, Boolean, Float, Complex - these are few of the many data types you will find.",
                  details: {
                    desc: "Data types restrict the kind of data or characters a user inputs!",
                  },
                },
                {
                  image: require('./assets/images/courses/python/python_course1.png'),
                  title: 'Course 3',
                  shortDesc: "Learn somethin",
                  details: {
                    desc: "Details",
                  },
                },
                {
                  image: require('./assets/images/courses/python/python_course1.png'),
                  title: 'Course 4',
                  shortDesc: "Learn",
                  details: {
                    desc: "Details",
                  },
                },
                {
                  image: require('./assets/images/courses/python/python_course1.png'),
                  title: 'Course 5',
                  shortDesc: "Short description!",
                  details: {
                    desc: "Details for another course.",
                  },
                },
  ];

  const scrollViewRef = useRef<ScrollView>(null);
  const scrollAnimation = useRef(new Animated.Value(0)).current;

  const handleScrollRight = () => {
    if (scrollViewRef.current) {
      const scrollViewWidth = scrollViewRef.current.getScrollableWidth();
      const currentOffset = scrollAnimation._value;
      const nextOffset = Math.min(currentOffset + 200, scrollViewWidth);

      Animated.timing(scrollAnimation, {
        toValue: nextOffset,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleDetailsPress = (title: string) => {
    setExpandedCourses((prevExpanded) => ({
      ...prevExpanded,
      [title]: !prevExpanded[title], 
    }));
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>BIT PLAZA</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.sidebar}>
              <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.replace('HomePage')}>
                <Image source={require('./assets/images/icons/home.png')} style={styles.sidebarImage}/>
                <Text style={styles.sidebarText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.replace('HomePage')}>
                <Image source={require('./assets/images/icons/allcourses.png')} style={styles.sidebarImage}/>
                <Text style={styles.sidebarText}>All Courses</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.replace('MyCourses')}>
                <Image source={require('./assets/images/icons/mycourses.png')} style={styles.sidebarImage}/>
                <Text style={styles.sidebarText}>My Courses</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.replace('HomePage')}>
                <Image source={require('./assets/images/icons/compiler.png')} style={styles.sidebarImage}/>
                <Text style={styles.sidebarText}>Compiler</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.replace('UserProfile')}>
                <Image source={require('./assets/images/icons/myprofile.png')} style={styles.sidebarImage}/>
                <Text style={styles.sidebarText}>My Profile</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.mainContent}>
            <Text style={styles.sectionTitle}>All Courses</Text>
            <View style={styles.galleryContainer}>
                <ScrollView
                  ref={scrollViewRef}
                  horizontal
                  style={styles.gallery}
                  contentContainerStyle={styles.galleryContent}
                  showsHorizontalScrollIndicator={true}
                  scrollEventThrottle={16}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollAnimation } } }],
                    { useNativeDriver: true }
                  )}
                >
                  {courses.map((course) => (
                    <View key={course.title} style={styles.courseBox}>
                      <Image source={course.image} style={styles.courseImage} />
                      <Text style={styles.courseTitle}>{course.title}</Text>
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          style={styles.detailsButton}
                          onPress={() => handleDetailsPress(course.title)}
                        >
                          <Text style={styles.buttonText}>
                            {expandedCourses[course.title] ? 'Hide Details' : 'View Details'}
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.startButton} onPress={() => handleStartPress(course.title)}>
                          <Text style={styles.buttonText}>
                            {startStates[course.title] ? 'Resume' : 'Start'}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      {expandedCourses[course.title] && (
                        <Text style={styles.shortDesc}>{course.shortDesc}</Text>
                      )}
                    </View>
                  ))}
                </ScrollView>
                <TouchableOpacity style={styles.scrollButton} onPress={handleScrollRight}>
                  <Image source={require('./assets/images/icons/arrow_right.png')} style={styles.scrollButtonImage} />
                </TouchableOpacity>
              </View>
              <View style={styles.galleryContainer}>
                <ScrollView
                  horizontal
                  style={styles.gallery}
                  contentContainerStyle={styles.galleryContent}
                  showsHorizontalScrollIndicator={true}
                >
                  {courses.slice(0, 3).map((course) => (
                    <View key={course.title} style={styles.courseBox}>
                      <Image source={course.image} style={styles.courseImage} />
                      <Text style={styles.courseTitle}>{course.title}</Text>
                    </View>
                  ))}
                </ScrollView>
                <TouchableOpacity style={styles.scrollButton} onPress={handleScrollRight}>
                  <Image source={require('./assets/images/icons/arrow_right.png')} style={styles.scrollButtonImage} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
safeArea: {
  flex: 1,
},
scrollViewContent: {
  flexGrow: 1,
},
sidebarText: {
  fontFamily: 'Rubik-SemiBold',
  fontSize: 20,
  paddingBottom: 5,
},
container: {
  flex: 1,
  width: '100%',
  padding: 20,
  flexDirection: 'column',
},
header: {
  width: '100%',
  height: '10%',
  backgroundColor: '#FEA60F',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
},
headerText: {
  paddingTop: 10,
  fontFamily: 'Bungee',
  fontSize: 45,
  color: 'black',
  textShadowColor: 'white',
  textShadowRadius: 20,
  textShadowOffset: {width: 5, height: 5},
},
content: {
  flexDirection: 'row',
  flex: 1,
},
sidebar: {
  width: '20%',
  marginRight: 20,
},
sidebarItem: {
  marginBottom: 10,
  alignItems: 'center',
},
sidebarImage: {
  width: 50,
  height: 50,
  marginBottom: 5,
},
mainContent: {
  flex: 1,
},
sectionTitle: {
  fontFamily: 'Rubik-SemiBold',
  fontSize: 24,
  marginBottom: 10,
  marginTop: 20,
},
galleryContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
},
gallery: {
},
galleryContent: {
  flexDirection: 'row',
  flexWrap: 'nowrap',
},
courseBox: {
  width: 400,
  margin: 10,
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 10,
},
courseImage: {
  width: '100%',
  height: 150,
  resizeMode: 'cover',
  marginBottom: 5,
},
courseTitle: {
  fontFamily: 'Rubik-SemiBold',
  fontSize: 18,
  marginBottom: 10,
},
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginBottom: 10,
},
detailsButton: {
  backgroundColor: 'orange',
  padding: 8,
  borderRadius: 5,
},
startButton: {
  backgroundColor: 'green',
  padding: 8,
  borderRadius: 5,
},
buttonText: {
  fontFamily: 'Rubik-SemiBold',
  color: 'white',
  fontSize: 16,
},
shortDesc: {
  fontFamily: 'Rubik-Regular',
  fontSize: 16,
  marginTop: 5,
},
langButtons: {
  flexDirection: 'row',
  gap: 10,
  marginBottom: 20,
},
langButton: {
  backgroundColor: 'lightblue',
  padding: 10,
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
},
langButtonText: {
  fontFamily: 'Rubik-SemiBold',
  fontSize: 16,
  color: 'black',
},
scrollButton: {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: 10,
  borderRadius: 5,
  marginLeft: 10,
},
scrollButtonImage: {
  width: 20,
  height: 20,
  tintColor: 'white',
},
});

export default AllCourses;
