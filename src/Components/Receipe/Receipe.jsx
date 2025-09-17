import { useState, useEffect } from "react";

const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [skip, setSkip] = useState(0);
    const [error, setError] = useState(null);

    const fetchRecipes = async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch(
                `https://dummyjson.com/recipes?limit=8&skip=${skip}&select=name,image`
            );

            if (!res.ok) {
                throw new Error("Failed to fetch recipes");
            }

            const data = await res.json();
            setRecipes((prev) => [...prev, ...data.recipes]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, [skip]);

    return (
        <div className="container-fluid py-4">
            <h1 className="text-center mb-4"> Recipes</h1>

            {error && <h4 className="text-danger text-center">{error}</h4>}

            <div className="row g-4">
                {recipes.map((rec) => (
                    <div key={rec.id} className="col-md-3 col-sm-6">
                        <div className="card shadow-sm h-100">
                            <img
                                src={rec.image}
                                className="card-img-top"
                                alt={rec.name}
                                loading="lazy"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h6 className="card-title">{rec.name}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {loading && <h5 className="text-success text-center mt-4">Loading...</h5>}

            {!loading && !error && (
                <div className="text-center mt-4">
                    <button
                        className="btn btn-primary px-4"
                        onClick={() => setSkip((prev) => prev + 8)}
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Recipe;
