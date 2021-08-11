import { withPhotos } from "../hoc/withPhotos";
import { ListOfPhotoCardComponent } from "../components/ListOfPhotoCard";

const ListOfPhotoCard = withPhotos(ListOfPhotoCardComponent);

export { ListOfPhotoCard };
