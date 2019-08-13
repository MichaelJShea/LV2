import { Agreement} from './agreement';
import { AgreementTract } from './agreement-tract';
import { AgreementProvision } from './agreement-provision';
import { CrossReference } from '../cross-references/cross-reference';
import { AgreementRelatedParty } from './agreement-related-party'
import { AgreementDocument } from './agreement-document';
import { AgreementComment } from './agreement-comment';
import { CrossReferencedWell} from '../cross-references/cross-referenced-well'
import { CrossReferencedCase } from '../cross-references/cross-referenced-case';
import { CrossReferencedUnit } from '../cross-references/cross-referenced-unit';


export class AgreementObject {
    Agreement: Agreement;
    AgreementTracts: AgreementTract[];
    AgreementProvisions: AgreementProvision[];
    AgreementRelatedParties: AgreementRelatedParty[];
    AgreementImages: AgreementDocument[];
    AgreementComments: AgreementComment[];
    AgreementWellCrossRefs: CrossReferencedWell[];
    AgreementCaseCrossRefs: CrossReferencedCase[];
    AgreementUnitCrossRefs: CrossReferencedUnit[];
}

