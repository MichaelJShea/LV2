import { CrossReferencedAgreement } from './cross-referenced-agreement';
import { CrossReferencedBA } from './cross-referenced-ba';
import { CrossReferencedCase } from './cross-referenced-case';
import { CrossReferencedCompany } from './cross-referenced-company';
import { CrossReferencedExternal } from './cross-referenced-external';
import { CrossReferencedUnit } from './cross-referenced-unit';
import { CrossReferencedWell } from './cross-referenced-well'

export class CrossReferenceList {

    public Agreements: Array<CrossReferencedAgreement>;
    public BAs: Array<CrossReferencedBA>;
    public Cases: Array<CrossReferencedCase>;
    public Companies: Array<CrossReferencedCompany>;
    public Externals: Array<CrossReferencedExternal>;
    public Units: Array<CrossReferencedUnit>;
    public Wells: Array<CrossReferencedWell>;
    public Total: Number; 
}
