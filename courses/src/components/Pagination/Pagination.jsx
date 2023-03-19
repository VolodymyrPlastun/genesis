import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import "./pagination.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  Title,
  MainText,
  Text,
  Icon,
  SkillsItem,
} from "./Pagination.styled";

function Items({ data }) {
  return (
    <Box>
      <List>
        {data &&
          data.map((item) => (
            <ListItem key={item.id}>
              <Link to={item.id}>
                <Title>{item.title}</Title>
                <img
                  src={item.previewImageLink + "/cover.webp"}
                  alt={item.title}
                />
                <Text>
                  <MainText>Count of lessons:</MainText> {item.lessonsCount}
                </Text>
                <Text>
                  <MainText>Course rating:</MainText> {item.rating}
                </Text>

                <ul>
                  {item.meta.skills.map((item, index) => (
                    <SkillsItem key={index}>
                      <Icon color="secondary" />
                      {item}
                    </SkillsItem>
                  ))}
                </ul>
              </Link>
            </ListItem>
          ))}
      </List>
    </Box>
  );
}

function PaginatedItems({ itemsPerPage, data }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [data, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items data={currentItems} />
      <ReactPaginate
        nextLabel={<ArrowCircleRightIcon style={{ color: "white" }} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<ArrowCircleLeftIcon style={{ color: "white" }} />}
        pageClassName="item pagination-page"
        pageLinkClassName="page-link"
        previousClassName="item previous"
        previousLinkClassName="page-link"
        nextClassName="item next"
        nextLinkClassName="page-link"
        breakClassName="item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="item active"
        renderOnZeroPageCount={null}
        disabledClassName="disabled-page"
      />
    </>
  );
}

export default PaginatedItems;
