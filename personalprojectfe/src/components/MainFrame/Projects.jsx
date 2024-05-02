import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Portfolio = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    const toggleCollapse1 = () => setOpen1(!open1);
    const toggleCollapse2 = () => setOpen2(!open2);
    const toggleCollapse3 = () => setOpen3(!open3);
    const toggleCollapse4 = () => setOpen4(!open4);
    const toggleCollapse5 = () => setOpen5(!open5);

    return (
        <div className="d-flex justify-content-center py-5" id="projects">
            <div className="row">
                <div className="col-12">
                    <h2 className='text-center'>Projects</h2>
                    <div className="container rounded p-3 bg-dark shadow-lg mb-4" style={{ maxWidth: '1000px' }}>
                        <h5>Frontend React Project - Estate Agent Admin Page</h5>
                        <div>Led the design and development of an admin page for an estate agent using React. Collaborated closely with team members through pair coding sessions, leveraging Bootstrap libraries for enhanced styling.</div>
                        <br />
                        <div>Collaborated closely with team members through pair coding sessions, leveraging Bootstrap libraries for enhanced styling.</div>
                        <button className="btn btn-dark fw-bold" onClick={toggleCollapse1} aria-controls="collapseOne" aria-expanded={open1}>
                            Property filtering system code snippet
                        </button>
                        <Collapse in={open1}>
                            <div id="collapseOne">
                                <SyntaxHighlighter language="javascript" style={atomDark}>
                                    {`
        for (const property of properties) {
            if (filterAdd &&!property.address.toLowerCase().includes(filterAdd.toLowerCase())) continue;
            if (filterCity &&!property.city.toLowerCase().includes(filterCity.toLowerCase())) continue;
            if (filterType!== "" &&!property.type.toLowerCase().includes(filterType.toLowerCase())) continue;
            if (Number(filterMinPrice) && Number(filterMinPrice) > Number(property.price)) continue;
            if (Number(filterMaxPrice) && Number(filterMaxPrice) < Number(property.price)) continue;
            if (Number(filterBathroom) > Number(property.bathroom)) continue;
            if (Number(filterBedroom) > Number(property.bedroom)) continue;
            if (filterGarden && filterGarden!== property.garden) continue;
            console.log("Property:", property)
        }
        `}
                                </SyntaxHighlighter>
                            </div>
                        </Collapse>
                    </div>
                    <div className="container rounded p-3 bg-dark shadow-lg mb-4" style={{ maxWidth: '1000px' }}>
                        <h5>Backend Spring Boot Project - Integration with React Frontend</h5>
                        <div>Constructed a robust Spring Boot backend to handle data for the estate agent admin page.</div>
                        <br />
                        <div>Utilised Postman for thorough testing of backend functionality before seamless integration with the frontend.</div>
                        <button className="btn btn-dark fw-bold" onClick={toggleCollapse2} aria-controls="collapseTwo" aria-expanded={open2}>
                            Booking services file from our spring boot backend
                        </button>
                        <Collapse in={open2}>
                            <div id="collapseTwo">
                                <SyntaxHighlighter language="java" style={atomDark}>
                                    {`
@Service
public class BookingServices {
    private BookingsRepo repo;
    public BookingServices(BookingsRepo repo) {
        super();
        this.repo = repo;
    }
    public Booking createBooking(Booking newBooking) {
        return this.repo.save(newBooking);

    }
    public List<BookingDTO> getBookings() {
        List<Booking> bookings = this.repo.findAll();
        List<BookingDTO> bookingDtos = new ArrayList<>();
        for (Booking booking : bookings) {
            BookingDTO dto = new BookingDTO();
            dto.setId(booking.getId());
            dto.setDate(booking.getDate());
            dto.setTime(booking.getTime());
            dto.setBuyerFirstName(booking.getBuyer().getFirstName());
            dto.setBuyerLastName(booking.getBuyer().getLastName());
            bookingDtos.add(dto);
        }
        return bookingDtos;
    }
    public ResponseEntity<Booking> getBookingById(int id) {
        Optional<Booking> found = this.repo.findById(id);
        if (found.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(found.get());
    }
    public ResponseEntity<Booking> updateById(int id, Booking newBooking) {
        Optional<Booking> found = this.repo.findById(id);

        if (found.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Booking made = found.get();

        if (newBooking.getDate()!= null) {
            made.setDate(newBooking.getDate());
        }
        if (newBooking.getTime()!= null) {
            made.setTime(newBooking.getTime());
        }
        Booking body = this.repo.save(made);
        return ResponseEntity.ok(body);
    }
    public boolean cancelBookingById(int id) {
        this.repo.deleteById(id);
        return!this.repo.existsById(id);
    }
}
`}
                                </SyntaxHighlighter>
                            </div>
                        </Collapse>
                    </div>
                    <div className="container rounded p-3 bg-dark shadow-lg mb-4" style={{ maxWidth: '1000px' }}>
                        <h5>Selenium Testing Project - Quality Assurance for Existing Codebase</h5>
                        <div>Tasked with conducting Selenium testing on a codebase inherited from another team.</div>
                        <br />
                        <div>Identified and rectified functionality issues through meticulous testing and debugging.</div>
                        <button className="btn btn-dark fw-bold" onClick={toggleCollapse3} aria-controls="collapseThree" aria-expanded={open3}>
                            One of tests we ran to check if create seller functionality is working & stated why it failed
                        </button>
                        <Collapse in={open3}>
                            <div id="collapseThree">
                                <SyntaxHighlighter language="java" style={atomDark}>{`
@Test
@Order(2)
void testCreateSeller() {
    this.driver.get("http://localhost:" + this.port);

    WebElement clickSeller = this.driver
            .findElement(By.cssSelector("#root > div > nav > div > a:nth-child(4) > button"));
    clickSeller.click();

    WebElement fNames = this.driver.findElement(By.cssSelector("#firstName"));
    fNames.sendKeys("Craig");

    WebElement sNames = this.driver.findElement(By.cssSelector("#lastName"));
    sNames.sendKeys("Morris");

    WebElement registers = this.driver
            .findElement(By.cssSelector("#root > div > div > div.col-6 > form > div > div > button"));
    registers.click();

    WebElement createdSeller = this.driver
            .findElement(By.cssSelector("#root > div > div > div.col-4 > div > div:nth-child(2) > div > p.col"));
    Assertions.assertEquals("Craig Morris", createdSeller.getText());

    WebElement Deletes = this.driver.findElement(By
            .cssSelector("#root > div > div > div.col-4 > div > div:nth-child(2) > div > p:nth-child(2) > button"));
    Deletes.click();

    // this code failed due to no function in react...

}
`}
                                </SyntaxHighlighter>
                            </div>
                        </Collapse>
                    </div>
                    <div className="container rounded p-3 bg-dark shadow-lg mb-4" style={{ maxWidth: '1000px' }}>
                        <h5>Legacy Code Project - Fullstack App Development</h5>
                        <div>Analysed and comprehended the functionality of a legacy Java codebase without a frontend.</div>
                        <br />
                        <div>Spearheaded the development of a full stack application by integrating frontend and backend components.</div>
                        <button className="btn btn-dark fw-bold" onClick={toggleCollapse4} aria-controls="collapseFour" aria-expanded={open4}>
                            Comparison between legacy java code & our integration of it in our app
                        </button>
                        <Collapse in={open4}>
                            <div id="collapseFour">
                                <h5>Legacy code</h5>
                                <SyntaxHighlighter language="java" style={atomDark}>
                                    {`
@Override
public CartItem create() {
    List<Item> items = itemDAO.readAll();
    for (Item item : items) {
        LOGGER.info(item.toString());
    }
    LOGGER.info("Please enter the Item ID you wish to add to the cart");
    long itemID = utils.getLong();
    Item item = itemDAO.readItem(itemID);
    item.setQuantity(1L);
    return cartItemDAO.create(new CartItem(item));
}
`}
                                </SyntaxHighlighter>
                                <h5>Our frontend adaptation</h5>
                                <SyntaxHighlighter language="jsx" style={atomDark}>
                                    {`
function ItemStructure(props) {
  const navigate = useNavigate();

  const handleAddToBasket = () => {
    axios
      .patch(\`http://localhost:8088/item/add/{props.id}/1\`)
      .then(() => {
        navigate("/items");
      })
      .catch((error) => alert('Item has already been added to the basket '));
  };

  const deleteItem = () => {
    axios
      .delete(\`http://localhost:8088/item/delete/{props.id}\`)
      .then(() => {
      })
      .catch((error) => alert('Item has already been deleted '));
  };

  return (
    <div id="itemCard" className="card-group d-inline-flex padding" style={{padding: "20px"}}>
      <div class="card border-dark mb-3" style={{width: "17%"}}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: {props.name} </li><li class="list-group-item">Price: £{props.price} </li>
        </ul>
      <button type="button" onClick={handleAddToBasket} className="btn btn-success ">
        Add to basket
      </button>
      <button type="button" onClick={deleteItem} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

ItemStructure.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ItemStructure;
`}
                                </SyntaxHighlighter>
                            </div>
                        </Collapse>
                    </div>
                    <div className="container rounded p-3 bg-dark shadow-lg mb-4" style={{ maxWidth: '1000px' }}>
                        <h5>Jenkins Deployment project - CI/CD Pipeline for FullstackApp</h5>
                        <div>Developed a freestyle job which covers the entire CI/CD pipeline</div>
                        <br />
                        <div>Built and deployed a frontend & backend app using docker</div>
                        <button className="btn btn-dark fw-bold" onClick={toggleCollapse5} aria-controls="collapseFive" aria-expanded={open5}>
                            Dockerfiles from which we were building the images for the frontend & backend
                        </button>
                        <Collapse in={open5}>
                            <div id="collapseFive">
                                <h5>Frontend app building</h5>
                                <SyntaxHighlighter language="docker" style={atomDark}>
                                    {`
# Use a lightweight Node.js image
FROM node:14-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the production-ready build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]
`}
                                </SyntaxHighlighter>
                                <h5>Backend app building</h5>
                                <SyntaxHighlighter language="docker" style={atomDark}>
                                    {`
# Use the official Maven/Java image
FROM maven:3.8.4-openjdk-17-slim as build

# Set working directory
WORKDIR /app

# Copy Maven configuration files
COPY pom.xml .

# Install dependencies
RUN mvn dependency:go-offline

# Copy the rest of the source code
COPY src ./src

# Build the application
RUN mvn package -DskipTests

# Create a minimal Java runtime image
FROM openjdk:17-slim
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 82
CMD ["java", "-jar", "app.jar"]
`}
                                </SyntaxHighlighter>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
