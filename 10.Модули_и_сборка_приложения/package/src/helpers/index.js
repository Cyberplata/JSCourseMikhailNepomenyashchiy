export {sum, addOne} from './first'; // Ещё один вариант синтаксиса. Реэкспорт - одновременно экспортирует и импрортирует две операции за раз, чтобы не писать длинный путь './src/helpers/first' => './src/helpers' 
export * from './second';
export * from './third';