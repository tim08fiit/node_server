import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Tooltip, Snackbar, Alert } from '@mui/material';
import { useUser } from '../Utils/UserContext';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import InfoSnackbar from './InfoSnackbar';

export default function ButtonPDF({ articleId, articleTitle }) {
    const { articlesInReport, addArticleReport, removeArcticleReport } =
        useUser();
    const [isInReport, setIsInReport] = useState(
        articlesInReport.some((article) => article.id === articleId)
    );
    const [searchParams, setSearchParams] = useSearchParams();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info');
    const buttonSize = 'small';
    const iconSize = 'medium';

    const handleAddArticle = (articleId, articleTitle) => {
        addArticleReport({
            id: articleId,
            searchTerm: searchParams.get('q'),
            title: articleTitle,
            timeAdded: new Date().toLocaleString(), // example: Tue, 05 Apr 2022 06:30:57 GMT
        });
        setIsInReport(true);
        openSnackbar('Article was added to report!', 'success');
    };

    const openSnackbar = (text, severity) => {
        setSnackbarOpen(false);
        setSnackbarText(text);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const handleRemoveArticle = (articleId) => {
        removeArcticleReport(articleId);
        setIsInReport(false);
        openSnackbar('Article was removed from report!', 'success');
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    // if user doesn't have this article in PDF report, allow him to add it
    // otherwise allow him to remove article from report
    return (
        <>
            <InfoSnackbar
                text={snackbarText}
                open={snackbarOpen}
                severity={snackbarSeverity}
                handleClose={handleSnackbarClose}
            />
            {isInReport ? (
                <Tooltip
                    title="Remove from PDF report"
                    placement="top"
                    TransitionProps={{ timeout: 500 }}
                    arrow
                >
                    <IconButton
                        size={buttonSize}
                        aria-label="Remove from PDF report"
                        onClick={() => handleRemoveArticle(articleId)}
                        sx={{
                            padding: 0,
                        }}
                    >
                        <CheckCircleIcon fontSize={iconSize} />
                    </IconButton>
                </Tooltip>
            ) : (
                <>
                    <Tooltip
                        title="Add to PDF report"
                        placement="top"
                        TransitionProps={{ timeout: 500 }}
                        arrow
                    >
                        <IconButton
                            size={buttonSize}
                            aria-label="Add to PDF report"
                            onClick={() =>
                                handleAddArticle(articleId, articleTitle)
                            }
                            sx={{
                                padding: 0,
                            }}
                        >
                            <AddCircleOutlineIcon fontSize={iconSize} />
                        </IconButton>
                    </Tooltip>
                </>
            )}
        </>
    );
}
