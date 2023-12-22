import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box, Typography } from "@mui/material";
import CarouselImage from "./CarouselImage";
import { textColor } from "../Config/colors";

const categories = [1, 2, 3, 4, 5, 6];
const categoriesLabels = [
  "Cute",
  "Scary",
  "Weird",
  "Mechanical",
  "Small",
  "Gigantic",
];

type Direction = 1 | -1;

const Carousel = () => {
  const [selectedCategory, setSelectedCategory] =
    useState(1);
  const [direction, setDirection] = useState<Direction>(1);
  const intervalRef = useRef<any>(null);

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setSelectedCategory((prevCategory) => {
        let nextIndex = prevCategory + direction;

        if (nextIndex === categories.length + 1) {
          setDirection(-1);
          return nextIndex - 2;
        } else if (nextIndex === 0) {
          setDirection(1);
          return nextIndex + 2;
        }
        return nextIndex;
      });
    }, 5000);
  }, [direction]);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current!);
  }, [startInterval]);

  const handleTypographyClick = (index: number) => {
    clearInterval(intervalRef.current!);
    if (index === selectedCategory) {
      startInterval();
    } else {
      setDirection(index > selectedCategory ? 1 : -1);
      setSelectedCategory(index);
      startInterval();
    }
  };

  const [isBellow950px, setIsBellow950px] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    const handleResize = () => {
      setIsBellow950px(window.innerWidth < 950);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const handleTransform = () => {
    if (selectedCategory === 1) {
      return isBellow950px ? 310 : 500;
    } else if (selectedCategory === 2) {
      return isBellow950px ? 215 : 345;
    } else if (selectedCategory === 3) {
      return isBellow950px ? 110 : 180;
    } else if (selectedCategory === 4) {
      return isBellow950px ? -20 : -40;
    } else if (selectedCategory === 5) {
      return isBellow950px ? -160 : -265;
    } else if (selectedCategory === 6) {
      return isBellow950px ? -280 : -460;
    }
  };

  const decrementCategory = () => {
    setSelectedCategory((prevCategory) => {
      let nextIndex = prevCategory - 1;
      if (nextIndex < 1) {
        nextIndex = categories.length;
      }
      return nextIndex;
    });
  };

  const incrementCategory = () => {
    setSelectedCategory((prevCategory) => {
      let nextIndex = prevCategory + 1;
      if (nextIndex > categories.length) {
        nextIndex = 1;
      }
      return nextIndex;
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        clearInterval(intervalRef.current!);
        startInterval();
        incrementCategory();
      } else if (event.key === "ArrowLeft") {
        clearInterval(intervalRef.current!);
        startInterval();
        decrementCategory();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: ".5rem",
        marginBottom: "10rem",
        "& > h4": {
          transition: "all ease 300ms",
          color: textColor,
          fontSize: "4rem",
        },
        "@media (max-width: 950px)": {
          "& > h4": {
            fontSize: "3rem",
          },
        },
      }}
    >
      <Typography variant="h4">Create</Typography>

      <Box
        key={"this box"}
        sx={{
          position: "relative",
          zIndex: "0",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0",
            left: "0",
            zIndex: "10",
            pointerEvents: "none",
            background:
              "linear-gradient(to right, black 10%, transparent 50%, black 90%)",
            "@media (max-width: 950px)": {
              background:
                "linear-gradient(to right, black 20%, transparent 50%, black 80%)",
            },
            "@media (max-width: 500px)": {
              background:
                "linear-gradient(to right, black 25%, transparent 50%, black 75%)",
            },
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            gap: "3rem",
            transition: "transform 1000ms ease",
            transform: `translateX(${handleTransform()}px)`,
            "@media (max-width: 950px)": {
              gap: "2rem",
            },
          }}
        >
          {categories.map((category, index) => (
            <Typography
              key={category}
              sx={{
                color:
                  category === selectedCategory
                    ? "#377475"
                    : "white",
                fontSize: "2.5rem",
                cursor: "pointer",
                position: "relative",
                zIndex: "1",
                transition: "all ease 300ms",
                "@media (max-width: 950px)": {
                  fontSize: "1.5rem",
                },
              }}
              onClick={() =>
                handleTypographyClick(category)
              }
            >
              {categoriesLabels[index]}
            </Typography>
          ))}
        </Box>
      </Box>
      <Typography variant="h4">Creatures</Typography>

      {categories.map((category) => (
        <CarouselImage
          key={category}
          predefinedImage={category}
          currentImage={selectedCategory}
          direction={direction}
        />
      ))}
    </Box>
  );
};

export default Carousel;
