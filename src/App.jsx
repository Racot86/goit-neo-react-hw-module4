
import styles from './App.module.css'
import SearchBar from "@components/SearchBar/SearchBar";
import ImageGallery from "@components/ImageGallery/ImageGallery";
import {useEffect, useState} from "react";
import {useImageSearch} from "@api/apiRequests.js";

import Loader from "@components/Loader/Loader.jsx";
import LoadMoreBtn from "@components/LoadMoreBtn/LoadMoreBtn.jsx";

import ImageModal from "@components/ImageModal/ImageModal.jsx";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage.jsx";
import {toast} from "react-toastify";

function App() {


    const [query, setQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fullImage, setFullImage] = useState('');

    const {
        data:images,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        refetch,
    } = useImageSearch(query)

    useEffect(() => {
        if(query.length){
            refetch()
        }

    },[query])

    const openModal = (image) => {
        setFullImage(image);
        setIsModalOpen(true);
    }



    return (
    <>
        <SearchBar  query={setQuery} />
        {!query && <p className={styles.text}>Type some words...</p>}
        {isLoading && <Loader className={styles.galleryLoader} />}
        {!images?.pages[0].total_images &&
            !!query.length && !hasNextPage &&
            !isLoading &&
            !isError &&
            <p className={styles.text}>no matches for your query</p>
        }
        {isError && toast.error(error.message)}
        { images &&
                <>
                    <ImageGallery images={images} openModal={openModal} />
                    {hasNextPage &&
                        <LoadMoreBtn
                            onClick={fetchNextPage}
                            isFetchingNextPage={isFetchingNextPage}
                            text='Load more'
                        />}
                    <ImageModal isOpen={isModalOpen} closeModal={()=>setIsModalOpen(false)} image={fullImage}/>
                </>
        }
        <ErrorMessage />
    </>
  )
}

export default App
