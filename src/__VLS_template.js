import tinput from './components/InputComponents/FormInput/tinput.vue';
import email from './components/InputComponents/FormInput/email.vue';
import password from './components/InputComponents/FormInput/password.vue';
import number from './components/InputComponents/FormInput/number.vue';
import file from './components/InputComponents/FormInput/file.vue';
import datatime from './components/InputComponents/FormInput/datatime.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './App.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'tinput', typeof __VLS_localComponents, "Tinput", "tinput", "tinput"> &
__VLS_WithComponent<'email', typeof __VLS_localComponents, "Email", "email", "email"> &
__VLS_WithComponent<'password', typeof __VLS_localComponents, "Password", "password", "password"> &
__VLS_WithComponent<'number', typeof __VLS_localComponents, "Number", "number", "number"> &
__VLS_WithComponent<'file', typeof __VLS_localComponents, "File", "file", "file"> &
__VLS_WithComponent<'datatime', typeof __VLS_localComponents, "Datatime", "datatime", "datatime"> &
__VLS_WithComponent<'formselect', typeof __VLS_localComponents, "Formselect", "formselect", "formselect">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1;
__VLS_components.Tinput; __VLS_components.tinput;
// @ts-ignore
[tinput,];
__VLS_components.Email; __VLS_components.email;
// @ts-ignore
[email,];
__VLS_components.Password; __VLS_components.password;
// @ts-ignore
[password,];
__VLS_components.Number; __VLS_components.number;
// @ts-ignore
[number,];
__VLS_components.File; __VLS_components.file;
// @ts-ignore
[file,];
__VLS_components.Datatime; __VLS_components.datatime;
// @ts-ignore
[datatime,];
__VLS_components.Formselect; __VLS_components.formselect;
// @ts-ignore
[formselect,];
__VLS_intrinsicElements.textarea;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, id: ("app"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, id: ("app"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["h1"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
(__VLS_8.slots!).default;
}
{
const __VLS_10 = ({} as 'Tinput' extends keyof typeof __VLS_ctx ? { 'tinput': typeof __VLS_ctx.Tinput; } : 'tinput' extends keyof typeof __VLS_ctx ? { 'tinput': typeof __VLS_ctx.tinput; } : typeof __VLS_resolvedLocalAndGlobalComponents).tinput;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, modelValue: ((__VLS_ctx.tinput)), }));
({} as { tinput: typeof __VLS_10; }).tinput;
const __VLS_12 = __VLS_11({ ...{}, modelValue: ((__VLS_ctx.tinput)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.tinput)), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
{
const __VLS_15 = ({} as 'Email' extends keyof typeof __VLS_ctx ? { 'email': typeof __VLS_ctx.Email; } : 'email' extends keyof typeof __VLS_ctx ? { 'email': typeof __VLS_ctx.email; } : typeof __VLS_resolvedLocalAndGlobalComponents).email;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, modelValue: ((__VLS_ctx.email)), }));
({} as { email: typeof __VLS_15; }).email;
const __VLS_17 = __VLS_16({ ...{}, modelValue: ((__VLS_ctx.email)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.email)), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
{
const __VLS_20 = ({} as 'Password' extends keyof typeof __VLS_ctx ? { 'password': typeof __VLS_ctx.Password; } : 'password' extends keyof typeof __VLS_ctx ? { 'password': typeof __VLS_ctx.password; } : typeof __VLS_resolvedLocalAndGlobalComponents).password;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, modelValue: ((__VLS_ctx.password)), }));
({} as { password: typeof __VLS_20; }).password;
const __VLS_22 = __VLS_21({ ...{}, modelValue: ((__VLS_ctx.password)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.password)), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
{
const __VLS_25 = ({} as 'Number' extends keyof typeof __VLS_ctx ? { 'number': typeof __VLS_ctx.Number; } : 'number' extends keyof typeof __VLS_ctx ? { 'number': typeof __VLS_ctx.number; } : typeof __VLS_resolvedLocalAndGlobalComponents).number;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, modelValue: ((__VLS_ctx.number)), }));
({} as { number: typeof __VLS_25; }).number;
const __VLS_27 = __VLS_26({ ...{}, modelValue: ((__VLS_ctx.number)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.number)), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
}
{
const __VLS_30 = ({} as 'File' extends keyof typeof __VLS_ctx ? { 'file': typeof __VLS_ctx.File; } : 'file' extends keyof typeof __VLS_ctx ? { 'file': typeof __VLS_ctx.file; } : typeof __VLS_resolvedLocalAndGlobalComponents).file;
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, modelValue: ((__VLS_ctx.file)), }));
({} as { file: typeof __VLS_30; }).file;
const __VLS_32 = __VLS_31({ ...{}, modelValue: ((__VLS_ctx.file)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.file)), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
}
{
const __VLS_35 = ({} as 'Datatime' extends keyof typeof __VLS_ctx ? { 'datatime': typeof __VLS_ctx.Datatime; } : 'datatime' extends keyof typeof __VLS_ctx ? { 'datatime': typeof __VLS_ctx.datatime; } : typeof __VLS_resolvedLocalAndGlobalComponents).datatime;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, modelValue: ((__VLS_ctx.datatime)), }));
({} as { datatime: typeof __VLS_35; }).datatime;
const __VLS_37 = __VLS_36({ ...{}, modelValue: ((__VLS_ctx.datatime)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.datatime)), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
{
const __VLS_40 = ({} as 'Formselect' extends keyof typeof __VLS_ctx ? { 'formselect': typeof __VLS_ctx.Formselect; } : 'formselect' extends keyof typeof __VLS_ctx ? { 'formselect': typeof __VLS_ctx.formselect; } : typeof __VLS_resolvedLocalAndGlobalComponents).formselect;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, modelValue: ((__VLS_ctx.formselect)), }));
({} as { formselect: typeof __VLS_40; }).formselect;
const __VLS_42 = __VLS_41({ ...{}, modelValue: ((__VLS_ctx.formselect)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.formselect)), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
}
{
const __VLS_45 = __VLS_intrinsicElements["textarea"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{}, value: ((__VLS_ctx.textarea)), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.textarea)), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[tinput, tinput, tinput, email, email, email, password, password, password, number, number, number, file, file, file, datatime, datatime, datatime, formselect, formselect, formselect, textarea, textarea,];
return __VLS_slots;
}
