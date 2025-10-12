import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductFilter = () => {
    const [ filters, setFilters] = useState({category: [], brand: [], shape: [], carat: [], color: [], type: [], occasion: [],});

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchFilters = async () =>{
            try{
                const [ categoryRes, brandRes, shapeRes, caratRes, colorRes, typeRes, occasionRes ] = await Promise.all([
                    axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/shopbycategory`),
                    axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/shopbybrad`),
                    axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/shopbyshape`),
                    axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/shopbycarat`),
                    axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/shopbycolor`),
                    axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/shopbytype`),
                    axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/shopbyoccasion`),
                ]);

                setFilters({ category: categoryRes.data || [], brand: brandRes.data || [], shape: shapeRes.data || [], carat: caratRes.data || [], color: colorRes.data || [], type: typeRes.data || [], occasion: occasionRes.data || [] });

            }catch(err){
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchFilters();
    },[]);

    return { filters, loading, error };
};

export default useProductFilter;