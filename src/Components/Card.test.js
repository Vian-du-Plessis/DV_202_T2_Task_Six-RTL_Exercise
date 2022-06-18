import { render, screen } from "@testing-library/react"
import {Card} from "./Card";
import renderer from 'react-test-renderer';

const cardProperty = {
    title: "Pain",
    sender: "Your-Favourite-Lecturer",
    message: "I think you all would agree!",
    image: {
        url: "https://i.chzbgr.com/thumb800/16763397/h0B023285/funny-memes-programming-memes-developers-coding-memes-coder-coding-nerdy-memes-memes-java-memes",
        alt: "Noice Meme"
    }
}

describe("Test Card Component", () => {


    test("Should show title", () => {
        render( 
            <Card 
                {...cardProperty} 
            /> 
        );
        const titleElement = screen.getByLabelText(/title/i);

        expect(titleElement).toBeInTheDocument();
        expect(titleElement.textContent).toBe("Pain");

    })

    test("Should show sender", () => {
        render( 
            <Card 
                {...cardProperty} 
            /> 
        );
        const titleElement = screen.getByLabelText(/sender/i);

        expect(titleElement).toBeInTheDocument();
        expect(titleElement.textContent).toBe("Your-Favourite-Lecturer");
    })

    test("Should show image", () => {
        render(<Card {...cardProperty} />)
        const image = screen.getByRole('img');

        expect(image).toHaveAttribute('src', 'Image.jpg');

    })

    // SNAPSHOT TEST
    test("Snapshot of component", () => {
        const component = renderer.create(
            <Card/>
        );

        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        renderer.act(() => {
            tree.props.onMouseEnter();
        })

        tree = component.toJSON();
        expect(tree).toMatchSnapshot()
    })


})