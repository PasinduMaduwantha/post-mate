import {Stack, Typography} from "@mui/material";
import stampCollection from "../../images/No data-pana 1.png";

function SpoiltStamps() {
    return (
        <>
            <Stack direction={"column"}>
                <Typography
                    color={"white"}
                    padding={2}
                    marginTop={2}
                    marginBottom={2}
                    bgcolor={"#131485"}
                    borderRadius={2}
                    variant='h6'
                >
                    Spoilt or Defaced Stamps
                </Typography>
                <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={2}
                >
                    <Typography width={"50%"}>
                        For the payment of postage no postage stamp whether adhesive,
                        embossed, or impressed shall be used, which <br/>­
                        <ul>
                            <li>
                                has been obliterated, defaced, torn, cut, or otherwise rendered
                                imperfect;
                            </li>
                            <li>
                                has at the time of posting any word, letter, figure, or design
                                written, printed, or impressed upon it, otherwise than by the
                                authority of Government; or
                            </li>
                            <li>
                                has been cut or otherwise separated from stamped stationery;
                                Provided that nothing in this rule shall be deemed to prohibit
                                the perforation of postage stamps with initials or other
                                identifying marks traced in minute holes.
                            </li>
                        </ul>
                    </Typography>
                    <img src={stampCollection} alt=''/>
                </Stack>
            </Stack>
        </>
    );
}

export default SpoiltStamps;
