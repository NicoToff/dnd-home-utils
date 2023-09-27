import { COMPONENTS, isComponentName} from "./types/component.type";
import type { ComponentName } from "./types/component.type";
import { DAMAGE_TYPES, isDamageType } from "./types/damage-type.type";
import type { DamageType } from "./types/damage-type.type";
import { GROUPS, isGroupName } from "./types/group.type";
import type { GroupName } from "./types/group.type";
import { SCHOOLS, isSchoolName } from "./types/school.type";
import type { SchoolName } from "./types/school.type";
import { SOURCES, isSourceName } from "./types/source.type";
import type { SourceName } from "./types/source.type";
import { SPELL_LEVELS, isSpellLevel } from "./types/spell-level.type";
import type { SpellLevel } from "./types/spell-level.type";
import { SPELL_TAGS, isSpellTag } from "./types/spell-tag.type";
import type { SpellTag } from "./types/spell-tag.type";
import { ABILITY_SCORES, isAbilityScore } from "./types/ability-score.type";
import type { AbilityScore } from "./types/ability-score.type";

export type { 
    ComponentName, DamageType, GroupName, SchoolName, SourceName, SpellLevel, SpellTag, AbilityScore
};
export { 
    COMPONENTS, isComponentName, 
    DAMAGE_TYPES, isDamageType, 
    GROUPS, isGroupName, 
    SCHOOLS, isSchoolName, 
    SOURCES, isSourceName, 
    SPELL_LEVELS, isSpellLevel,
    SPELL_TAGS, isSpellTag,
    ABILITY_SCORES, isAbilityScore
};