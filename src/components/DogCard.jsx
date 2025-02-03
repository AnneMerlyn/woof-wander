/* eslint-disable react/prop-types */
import { Card, CardFooter, Image, Button } from "@heroui/react";

const DogCard = ({ item }) => {
    return (
        <Card isFooterBlurred className="border-none" radius="lg">
            <Image
                alt="Judging Dog"
                className="object-cover w-full"
                src={item.image_link}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                    <p className="text-black text-tiny">{item.name}</p>
                    <p className="text-black text-tiny">{item.name}.</p>
                </div>
                <Button
                    className="text-tiny bg-orange-400"
                    radius="full"
                    size="sm"
                >
                    Explore More
                </Button>
            </CardFooter>
        </Card>
    );
};

export default DogCard;
